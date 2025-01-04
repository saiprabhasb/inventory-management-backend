const express = require("express");
const { getDashboardStats } = require("../controllers/dashboardController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

// Get dashboard statistics
router.get("/", verifyToken, getDashboardStats);

module.exports = router;
