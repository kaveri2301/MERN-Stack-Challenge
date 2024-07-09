const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/transactions', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Define routes
app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
