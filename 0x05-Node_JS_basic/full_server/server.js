const express = require('express');
const router = require('./routes/index'); // here we adjust the path as necessary

const app = express();
const port = 1245;

// Use the routes defined in the routes/index.js file
app.use('/', router);

// Start the server
app.listen(port, () => {
});

module.exports = app;