const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 1245;

// Function to count students
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const reportParts = [];
    const fileLines = data.toString('utf-8').trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];

      if (!Object.keys(studentGroups).includes(field)) {
        studentGroups[field] = [];
      }

      const studentEntries = studentPropNames.map((propName, idx) => [
        propName,
        studentPropValues[idx]
      ]);

      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    const totalStudents = Object.values(studentGroups).reduce(
      (pre, cur) => (pre || []).length + cur.length
    );

    reportParts.push(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroups)) {
      reportParts.push([
                `Number of students in ${field}: ${group.length}.`,
                'List:',
                group.map((student) => student.firstname).join(', ')
      ].join(' '));
    }

    resolve(reportParts.join('\n'));
  });
});

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for /students URL
app.get('/students', (req, res) => {
  const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
  countStudents(DB_FILE)
    .then((report) => {
      const responseText = `This is the list of our students\n${report}`;
      res.setHeader('Content-Type', 'text/plain');
      res.send(responseText);
    })
    .catch((err) => {
      const responseText = `This is the list of our students\n${err.message}`;
      res.setHeader('Content-Type', 'text/plain');
      res.status(500).send(responseText);
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
