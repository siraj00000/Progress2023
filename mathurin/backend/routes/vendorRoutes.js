const vendorRouter = require("express").Router();

const vendorAuthCtrl = require("../controller/vendorController");
const vendorProductCtrl = require("../controller/vendorProductController");
const { protect } = require("../middleware/protect");
const upload = require("../middleware/uploadFile");

vendorRouter
    // POST /vendors/register
    .post("/register", protect, upload.single('image'), vendorAuthCtrl.register)

    // POST /vendors/login
    .post("/login", vendorAuthCtrl.login)

    // POST /vendors/forgotpassword
    .post("/forgotpassword", vendorAuthCtrl.forgetPassword)

    // POST /vendors/resetpassword/:resetToken
    .post("/resetpassword/:resetToken", vendorAuthCtrl.resetPassword)

    // POST /vendors/resetsubadminpassword
    .post("/resetsubadminpassword", vendorAuthCtrl.resetSubAdminPassword)

    // DELETE /vendors/:id
    .delete("/:id/:role", vendorAuthCtrl.deleteVendor);


// New vendor product routes
vendorRouter
    .get("/products", protect, vendorProductCtrl.getVendorProducts)
    .post("/products", protect, vendorProductCtrl.createProduct)
    .patch("/products/:productId", protect, vendorProductCtrl.updateProductStatus)
    .get("/categories", protect, vendorProductCtrl.getCategories);

module.exports = vendorRouter;
