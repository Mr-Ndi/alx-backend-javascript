/*
 * Set the response header to indicate plain text
 * Send the response body
 * listening to the port 1245
 */
const http = require('http')
app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!\n');
});

app.listen(1245)

module.exports = app;
