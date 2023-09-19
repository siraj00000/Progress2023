const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const vendorSchema = new mongoose.Schema({
    shopName: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    isApproved: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Password Encryption
vendorSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare requested and encrypted password
vendorSchema.methods.matchPasswords = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// JsonWebToken
vendorSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.VENDOR_JWT_SECRET, { expiresIn: process.env.VENDOR_JWT_EXPIRE });
};


// This code will generate a reset token using
// crypto.randomBytes() and then hash it using
// SHA - 256 before storing it in the resetPasswordToken
// field.
vendorSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Update the resetPasswordToken field using SHA-256 hash
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Set expiration time

    return resetToken;
};

const Vendor = mongoose.model('vendors', vendorSchema);
module.exports = Vendor;
