const http = require('http');

const app = http.createServer();

app.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

app.listen(1245, 'localhost', () => {});
module.exports = app;
