// QUESTION 1: Create Student Objects

const students = [
  {
    id: 1,
    name: "David Johnson",
    age: 20,
    grades: [85, 92, 78]
  },
  {
    id: 2,
    name: "Sarah Williams",
    age: 21,
    grades: [72, 68, 75]
  },
  {
    id: 3,
    name: "Michael Brown",
    age: 19,
    grades: [95, 90, 94]
  },
  {
    id: 4,
    name: "Grace Anderson",
    age: 22,
    grades: [55, 62, 58]
  },
  {
    id: 5,
    name: "Daniel Smith",
    age: 20,
    grades: [45, 52, 48]
  }
];


// QUESTION 2: Calculate Averages

function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  const average = total / grades.length;

  // Round the average to 2 decimal places
  return Number(average.toFixed(2));
}

const studentsWithAverage = students.map(student => {
  return {
    ...student,
    average: calculateAverage(student.grades)
  };
});

console.log("Students with averages:");
console.log(studentsWithAverage);


// QUESTION 3: Filter Passing Students

function getPassingStudents(students) {
  return students.filter(student => student.average >= 60);
}

const passing = getPassingStudents(studentsWithAverage);

console.log("Passing students:");
console.log(passing);


// QUESTION 4: Functions and Callbacks

function processStudents(students, callback) {
  return students.map(student => callback(student));
}

function addLetterGrade(student) {
  let letterGrade;

  if (student.average >= 90) {
    letterGrade = "A";
  } else if (student.average >= 80) {
    letterGrade = "B";
  } else if (student.average >= 70) {
    letterGrade = "C";
  } else if (student.average >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return {
    ...student,
    letterGrade: letterGrade
  };
}

function addStatus(student) {
  return {
    ...student,
    status: student.average >= 60 ? "Pass" : "Fail"
  };
}

const studentsWithGrades = processStudents(
  studentsWithAverage,
  addLetterGrade
);

console.log("Students with letter grades:");
console.log(studentsWithGrades);

const studentsWithStatus = processStudents(
  studentsWithAverage,
  addStatus
);

console.log("Students with status:");
console.log(studentsWithStatus);

console.log("Test average:", calculateAverage([80, 90, 100]));

console.log("Test passing students:", getPassingStudents(studentsWithAverage));

console.log(
  "Test letter grade:",
  addLetterGrade(studentsWithAverage[0])
);

console.log(
  "Test status:",
  addStatus(studentsWithAverage[0])
);