const fs = require('fs');

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            const studentsByField = {};
            const lines = data.trim().split('\n');
            const headers = lines[0].split(',');

            // Assuming the last column is the field and the first column is the firstname
            lines.slice(1).forEach(line => {
                const studentData = line.split(',');
                const firstname = studentData[0];
                const field = studentData[studentData.length - 1];

                if (!studentsByField[field]) {
                    studentsByField[field] = [];
                }

                studentsByField[field].push(firstname);
            });

            resolve(studentsByField);
        });
    });
}

module.exports = readDatabase;
