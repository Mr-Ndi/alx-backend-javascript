const http = require('http');
const fs = require('fs');
const path = require('path');

async function countStudents(filePath) {
  try {
    const db = await fs.promises.readFile(filePath, 'utf8');
    const students = db.split('\n').filter((line) => line.trim() !== '');
    const fields = {};

    students.slice(1).forEach((student) => {
      const [name, , , field] = student.split(',');
      if (fields[field]) {
        fields[field].push(name);
      } else {
        fields[field] = [name];
      }
    });

    return {
      total: students.length - 1,
      fields
    };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  const url = req.url;
  const filePath = process.argv[2];

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');

  } else if (url === '/students') {
    if (!filePath) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Database file path is required\n');
      return;
    }
    try {
      const { total, fields } = await countStudents(filePath);
      let response = `This is the list of our students\nNumber of students: ${total}\n`;
      Object.keys(fields).forEach((key) => {
        response += `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}\n`;
      });
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(response);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database\n');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on http://localhost:1245');
});

module.exports = app;