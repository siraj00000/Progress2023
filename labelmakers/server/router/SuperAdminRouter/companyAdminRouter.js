const companyAdminRouter = require("express").Router();
const { protect } = require("../../middleware/auth");
const authAdmin = require("../../middleware/authAdmin");
const {
    insertCompanyAdminDetail,
    updateCompanyAdminDetail,
    deleteCompanyAdmin,
    fetchCompanyAdminDetail,
    fetchAdmins,
    generateCSV,
    fetchSpecificCompany
} = require("../../controller/SuperAdminCtrl/companyAdminCtrl");
const { authCompanyAdmin } = require("../../middleware/authSubAdmin");

companyAdminRouter
    .post("/insert-company-admin", protect, authAdmin, insertCompanyAdminDetail)
    .post("/fetch-spacific-company/:id", protect, authCompanyAdmin, fetchSpecificCompany)
    .get("/fetch-company-admin", protect, authAdmin, fetchCompanyAdminDetail)
    .put("/update-company-admin/:id", protect, authAdmin, updateCompanyAdminDetail)
    .delete("/delete-company-admin/:id", protect, authAdmin, deleteCompanyAdmin)
    .post("/fetch-admin", protect, authAdmin, fetchAdmins)
    .get('/generate-company-csv', protect, authAdmin, generateCSV);

module.exports = companyAdminRouter;