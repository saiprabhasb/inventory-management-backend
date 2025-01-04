const express = require("express");
const { addTransaction, getTransactions } = require("../controllers/transactionController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

// Add a transaction
router.post("/", verifyToken, addTransaction);

// Get all transactions
router.get("/", verifyToken, getTransactions);

module.exports = router;
