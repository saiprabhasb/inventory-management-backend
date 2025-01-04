const Transaction = require("../models/transactionModel");
const Product = require("../models/productModel");

// Add a transaction
const addTransaction = async (req, res) => {
  const { productId, type, quantity, note } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (type === "OUT" && product.stock < quantity) {
      return res.status(400).json({ message: "Insufficient stock" });
    }

    if (type === "IN") {
      product.stock += quantity;
    } else if (type === "OUT") {
      product.stock -= quantity;
    }

    await product.save();

    const transaction = new Transaction({ product: productId, type, quantity, note });
    await transaction.save();

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all transactions
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate("product", "name category");
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addTransaction, getTransactions };
