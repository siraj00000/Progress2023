const Category = require("../models/Category");
const Product = require("../models/Product");
const ErrorResponse = require("../utils/other/errorResponse");

const vendorProductCtrl = {
    // Fetch all products of the current vendor
    getVendorProducts: async (req, res, next) => {
        try {
            const products = await Product.find({ vendor: req.vendor._id });
            res.status(200).json({
                success: true,
                count: products.length,
                data: products,
            });
        } catch (error) {
            next(error);
        }
    },

    // Create a new product for the current vendor
    createProduct: async (req, res, next) => {
        const productData = req.body;
        productData.vendor = req.vendor._id; // Assign the current vendor as the product's vendor

        try {
            const product = await Product.create(productData);
            res.status(201).json({
                success: true,
                data: product,
            });
        } catch (error) {
            next(error);
        }
    },

    // Update the status of a product (e.g., activate, deactivate)
    updateProductStatus: async (req, res, next) => {
        const { productId } = req.params;
        const { status } = req.body;

        try {
            const product = await Product.findByIdAndUpdate(
                productId,
                { status },
                { new: true }
            );

            if (!product) {
                return next(new ErrorResponse("Product not found", 404));
            }

            res.status(200).json({
                success: true,
                data: product,
            });
        } catch (error) {
            next(error);
        }
    },

    // Fetch all available categories
    getCategories: async (req, res, next) => {
        try {
            const categories = await Category.find();
            res.status(200).json({
                success: true,
                count: categories.length,
                data: categories,
            });
        } catch (error) {
            next(error);
        }
    },
};

module.exports = vendorProductCtrl;
