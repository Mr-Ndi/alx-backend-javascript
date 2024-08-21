const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const db = await fs.readFile(path, 'utf8');
    const students = db.split('\n').filter((line) => line.trim() !== '');
    console.log(`Number of students: ${students.length - 1}`);
    const fields = {};
    students.slice(1).forEach((student) => {
      const field = student.split(',')[3];
      const name = student.split(',')[0];
      if (fields[field]) {
        fields[field].push(name);
      } else {
        fields[field] = [name];
      }
    });
    Object.keys(fields).forEach((key) => {
      console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(new Error('Cannot load the database'));
  }
}

module.exports = countStudents;
