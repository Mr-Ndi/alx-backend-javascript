class AppController {
    static getHomepage(request, response) {
        // Set the response status to 200
        response.status(200).send("Hello Holberton School");
    }
}

// Example usage with an Express.js server
const express = require('express');
const app = express();
const port = 3000;

// Define a route that uses the getHomepage method
app.get('/', (req, res) => {
    AppController.getHomepage(req, res);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
