// task--1
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
};

const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'Los Angeles',
};

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// task--2

interface Directors extends Teacher {
  numberOfReports: number;
}

// task--3

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// task--4

// Define the interface for the StudentClass constructor
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Define the interface for the StudentClass
interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClass {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}