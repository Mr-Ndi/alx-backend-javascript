const { readDatabase } = require('../utils'); // Adjust the path as necessary

class StudentsController {
    static async getAllStudents(request, response) {
        try {
            const students = await readDatabase();
            const fields = {};

            // Organize students by their major
            students.forEach(student => {
                const major = student.major.toLowerCase(); // Case insensitive
                if (!fields[major]) {
                    fields[major] = [];
                }
                fields[major].push(student.firstName);
            });

            // Prepare the response
            let result = "This is the list of our students\n";
            for (const [field, names] of Object.entries(fields)) {
                result += `Number of students in ${field.toUpperCase()}: ${names.length}. List: ${names.join(', ')}\n`;
            }

            // Send the response with status 200
            response.status(200).send(result.trim());
        } catch (error) {
            // Handle database read error
            response.status(500).send("Cannot load the database");
        }
    }

    static async getAllStudentsByMajor(request, response) {
        const major = request.query.major; // Get the major from query parameters

        // Validate the major parameter
        if (major !== 'CS' && major !== 'SWE') {
            return response.status(500).send("Major parameter must be CS or SWE");
        }

        try {
            const students = await readDatabase();
            const filteredStudents = students.filter(student => student.major === major);

            // Prepare the response
            const firstNames = filteredStudents.map(student => student.firstName);
            const result = `List: ${firstNames.join(', ')}`;

            // Send the response with status 200
            response.status(200).send(result);
        } catch (error) {
            // Handle database read error
            response.status(500).send("Cannot load the database");
        }
    }
}

module.exports = StudentsController;
