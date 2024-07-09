const axios = require('axios');
const mongoose = require('mongoose');
const Transaction = require('../models/Transaction');

mongoose.connect('mongodb://localhost:27017/transactions', { useNewUrlParser: true, useUnifiedTopology: true });

const seedDatabase = async () => {
  const { data } = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
  await Transaction.insertMany(data);
  console.log('Database seeded!');
  mongoose.disconnect();
};

seedDatabase();
