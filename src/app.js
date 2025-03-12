const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./Config/db');
const routes = require('./Routes/index');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public')); // Serving static files

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.use('/api', routes);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
