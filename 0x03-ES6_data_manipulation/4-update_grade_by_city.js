export default function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students) || !Array.isArray(newGrades)) {
      return [];
    }
  
    return students.filter(student => student.location === city).map(student => {
      const newGrade = newGrades.find(grade => grade.studentId === student.id);
      student.grade = newGrade ? newGrade.grade : 'N/A';
      return student;
    });
  }  