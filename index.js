// backend/server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
connectDB();
app.use(express.json());


// routes

app.use('/categories', require('./routes/categoryRoutes'));
app.use('/products', require('./routes/productRoutes'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));