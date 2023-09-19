const ErrorResponse = require("../utils/other/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    if (err.code === 11000 && err.name === 'MongoError') {
        // Handle duplicate key error (E11000) for any field
        const duplicateField = Object.keys(err.keyPattern)[0]; // Get the duplicate field name dynamically
        const message = `${duplicateField.charAt(0).toUpperCase() + duplicateField.slice(1)} already exists.`;
        error = new ErrorResponse(message, 400);
    }

    if (err.name === 'ValidationError') {
        // Validation error
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
    });
};

module.exports = errorHandler;
