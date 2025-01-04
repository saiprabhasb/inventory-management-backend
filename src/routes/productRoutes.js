const express = require("express");
const { getProducts, addProduct } = require("../controllers/productController");
const { verifyToken, authorizeRoles } = require("../middleware/authMiddleware");

const router = express.Router();

// Get all products
router.get("/", verifyToken, getProducts);

// Add a new product (Admin only)
router.post("/", verifyToken, authorizeRoles("Admin"), addProduct);

module.exports = router;
