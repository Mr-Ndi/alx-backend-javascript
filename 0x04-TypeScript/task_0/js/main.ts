// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 30,
  location: 'Los Angeles',
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Get the table body element
const tableBody = document.querySelector('#student-table tbody');

// Iterate over the studentsList and create a new row for each student
studentsList.forEach((student) => {
  // Create a new table row
  const row = document.createElement('tr');

  // Create a cell for the first name
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  // Create a cell for the location
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  // Append the row to the table body
  tableBody.appendChild(row);
});
