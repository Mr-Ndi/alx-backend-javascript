const fs = require('fs');
const path = require('path')

function countStudents(filepath) {
	try {
		// reading csv file synchronously
		const data = fs.readFile(filepath, 'utf8');
		// spliting data into lines and remove empty one
		const lines = data.split('\n').filter(line => line.trim() !== '');
		//initialising student count
		for (let i = 1; i < lines.length; i++){
			const [firstName, field] = lines[i].split(',');
			if (field){
				//checking if the field exists
				if (!studentsByField[field]){
					studentsByField[field] = []
				}
				// adding the first name to the corresponding field
				studentsByField[field].push(firstName)
			}
		}
		// calculatin std nbr
		const number = Object.values(studentsByField).flat().length;
		// Log the total number of students
        console.log(`Number of students: ${number}`);

        // Log the number of students in each field and their names
        for (const [field, names] of Object.entries(studentsByField)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        // Handle the error if the file cannot be read
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;