const express = require('express');
const app = express();
app.listen(1245);

app.get('/', (req, res) => {
	console.log('Hello Holberton School!');
});
module.exports = app;
