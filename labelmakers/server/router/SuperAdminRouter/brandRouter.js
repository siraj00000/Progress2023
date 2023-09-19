const brandRouter = require("express").Router();
const { protect } = require("../../middleware/auth");
const authAdmin = require("../../middleware/authAdmin");
const { authManufacturerAdmin } = require("../../middleware/authSubAdmin");
const {
    fetchBrands,
    insertBrand,
    updateBrandInfo,
    deleteBrand,
    updateImages,
    generateCSV,
    fetchSpecificBrand,
    fetchBrandByEmail,
    fetchBrandByManufacturer,
} = require("../../controller/SuperAdminCtrl/brandCtrl");

brandRouter
    .post('/insert-brand', protect, authAdmin, insertBrand)
    .get('/fetch-brands', protect, authAdmin, fetchBrands)
    .post('/fetch-brand-by-email', protect, fetchBrandByEmail)
    .post('/fetch-brand-by-manufacturer', protect, authManufacturerAdmin, fetchBrandByManufacturer)
    .get('/fetch-brands/:id', protect, authAdmin, fetchSpecificBrand)
    .put('/update-brand/:id', protect, authAdmin, updateBrandInfo)
    .delete('/delete-brand/:id', protect, authAdmin, deleteBrand)
    .put('/update-image/:id', protect, authAdmin, updateImages)
    .get('/generate-brand-csv', protect, authAdmin, generateCSV);

module.exports = brandRouter;