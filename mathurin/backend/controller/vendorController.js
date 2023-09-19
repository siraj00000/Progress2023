const crypto = require("crypto");
const Vendor = require("../models/Vendor");
const ErrorResponse = require("../utils/other/errorResponse");
const cloudinary = require('cloudinary');
const { validateMimeType, removeTmp } = require("../utils/other/uploadActions");
const Customer = require("../models/Customer");

const vendorAuthCtrl = {
    register: async (req, res, next) => {
        const { shopName, address, country, city, phone } = req.body;
        try {
            const shopImage = req.file;
            let shopImageURL;


            if (shopImage) {
                let isValidFile = validateMimeType(req.file?.mimetype);
                if (!isValidFile) throw new ErrorResponse(400, 'Invalid image type');

                shopImageURL = await cloudinary.v2.uploader.upload(req.file?.path,
                    { folder: 'vendor-shop' }
                );

                // remove temp file
                removeTmp(req.file.path);
            }

            const vendor = await Vendor.create({
                shopName,
                image: shopImageURL?.secure_url,
                address,
                country,
                city,
                phone,
            });

            // Update the customer's vendor_ref field using req.customer._id
            await Customer.updateOne(
                { _id: req.customer._id },
                {
                    $set: {
                        'vendor_ref.isApproved': false,
                        'vendor_ref.vendor_id': vendor._id.toString()
                    }
                }
            );


            sendRegisterToken(vendor, 201, res);
        } catch (error) {
            // console.log(error);
            next(error);
        }
    },
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) return next(new ErrorResponse("Please provide email and password.", 401));

            const vendor = await Vendor.findOne({ email }).select("+password");

            if (!vendor) return next(new ErrorResponse("Invalid Credentials.", 401));

            const isMatch = await vendor.matchPasswords(password);
            if (!isMatch) return next(new ErrorResponse("Invalid Credentials.", 401));

            sendToken(vendor, 200, res);

        } catch (error) {
            next(error);
        }
    },
    forgetPassword: async (req, res, next) => {
        const { email } = req.body;
        try {
            const vendor = await Vendor.findOne({ email });
            if (!vendor) {
                return next(new ErrorResponse("Email couldn't be sent", 404));
            }

            const resetToken = vendor.getResetPasswordToken();

            await vendor.save();

            const resetUrl = `http://localhost:3000/ls-admin/passwordreset/${resetToken}`;

            const message = `
                <h1>You have requested a password reset</h1>
                <p>Please go to this link to reset password</p>
                <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
            `;

            try {
                await sendEmail({
                    to: vendor.email,
                    subject: "Password Reset Request",
                    text: message
                });

                res.status(200).json({
                    success: true,
                    data: "Email Sent"
                });
            } catch (error) {
                vendor.resetPasswordToken = undefined;
                vendor.resetPasswordExpire = undefined;

                await vendor.save();

                return next(new ErrorResponse("Email could not be send"));
            }

        } catch (error) {
            next(error);
        }
    },
    resetPassword: async (req, res, next) => {
        const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

        try {
            const vendor = await Vendor.findOne({
                resetPasswordToken,
                resetPasswordExpire: { $gt: Date.now() }
            });

            if (!vendor) {
                return next(new ErrorResponse("Invalid Reset Token", 400));
            }

            vendor.password = req.body.password;
            vendor.resetPasswordToken = undefined;
            vendor.resetPasswordExpire = undefined;

            await vendor.save();

            res.status(200).json({
                success: true,
                data: "Password Reset Success",
                token: vendor.getSignedJwtToken(),
            });
        } catch (error) {
            next(error);
        }
    },
    resetSubAdminPassword: async (req, res, next) => {
        try {
            const { email } = req.body;

            const vendor = await Vendor.findOne({ email });
            if (!vendor) return next(new ErrorResponse("No vendor found !!", 400));

            if (vendor.role === 1) return next(new ErrorResponse("Access denied !!", 400));

            const resetToken = vendor.getResetPasswordToken();

            await vendor.save();

            const resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

            const __vendor = await Vendor.findOne({
                resetPasswordToken,
                resetPasswordExpire: { $gt: Date.now() }
            });

            if (!__vendor) {
                return next(new ErrorResponse("Invalid Reset Token", 400));
            }

            __vendor.password = req.body.password;
            __vendor.resetPasswordToken = undefined;
            __vendor.resetPasswordExpire = undefined;

            await __vendor.save();

            res.status(200).json({
                success: true,
                msg: "Password Reset Success",
            });
        } catch (error) {
            next(error);
        }
    },
    deleteVendor: async (req, res, next) => {
        try {
            const { params: { id, role } } = req;
            if (!id) return next(new ErrorResponse("Invalid Vendor!", 400));
            if (role === 1) return next(new ErrorResponse("Do not allowed to delete this vendor!", 400));

            const vendorToDelete = await Vendor.where({ _id: id, role }).findOneAndDelete();
            if (vendorToDelete) {
                res.status(200).json({
                    success: true,
                    msg: "Vendor Deleted!"
                });
            }
        } catch (error) {
            next(error);
        }
    }
};

const sendRegisterToken = (vendor, statusCode, res) => {
    const token = vendor.getSignedJwtToken();
    res.status(statusCode).json({
        success: true,
        msg: "Vendor Registered!",
        vendorId: vendor._id,
        token
    });
};

const sendToken = (vendor, statusCode, res) => {
    const token = vendor.getSignedJwtToken();
    res.status(statusCode).json({ success: true, token });
};

module.exports = vendorAuthCtrl;
