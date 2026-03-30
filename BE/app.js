const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // Will look for index.js

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Vite default port
    credentials: true,
}));

// Base Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Mount Routes
app.use('/api', routes);

module.exports = app;
