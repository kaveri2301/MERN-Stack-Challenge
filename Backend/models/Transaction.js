const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  category: String,
  sold: Boolean,
  dateOfSale: Date,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
