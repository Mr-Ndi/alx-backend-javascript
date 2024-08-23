const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

// Link the route / to the AppController
app.get('/', AppController.getHomepage);

// Link the route /students to the StudentsController
app.get('/students', StudentsController.getAllStudents);

// Link the route /students/:major to the StudentsController
app.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = app;