import createEmployeesObject from './11-createEmployeesObject.js';

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));


// Write a function named createEmployeesObject that will receive two arguments:

// departmentName (String)
// employees (Array of Strings)
// export default function createEmployeesObject(departmentName, employees) {

// }
// The function should return an object with the following format:

// {
//      $departmentName: [
//           $employees,
//      ],
// }