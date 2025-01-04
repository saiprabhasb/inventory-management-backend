const express = require("express");
const { getSuppliers, addSupplier } = require("../controllers/supplierController");
const { verifyToken, authorizeRoles } = require("../middleware/authMiddleware");

const router = express.Router();

// Get all suppliers
router.get("/", verifyToken, getSuppliers);

// Add a new supplier (Admin or Manager)
router.post("/", verifyToken, authorizeRoles("Admin", "Manager"), addSupplier);

module.exports = router;
