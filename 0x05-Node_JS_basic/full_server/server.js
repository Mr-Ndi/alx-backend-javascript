const express = require('express');
const routes = require('./routes/index'); // Adjust the path as necessary

const app = express();
const port = 1245;

// Use the routes defined in the routes/index.js file
app.use(routes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;