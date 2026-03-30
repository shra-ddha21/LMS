const app = require('./app');
const connectDB = require('./config/db');
const config = require('./config/config');

// Connect to Database
connectDB();

const PORT = config.PORT;

app.listen(PORT, () => {
    console.log(`Server running in ${config.NODE_ENV} mode on port ${PORT}`);
});
