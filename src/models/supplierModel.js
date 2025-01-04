const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contactInfo: {
      email: { type: String, required: true },
      phone: { type: String },
    },
    address: { type: String },
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Supplier", supplierSchema);
