const Product = require("../models/productModel");
const Transaction = require("../models/transactionModel");

const getDashboardStats = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalTransactions = await Transaction.countDocuments();
    const lowStockProducts = await Product.find({ stock: { $lte: 5 } });

    res.status(200).json({
      totalProducts,
      totalTransactions,
      lowStockProducts: lowStockProducts.length,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDashboardStats };
