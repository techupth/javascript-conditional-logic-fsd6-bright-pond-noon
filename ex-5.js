function calculateStudentGrade(score) {
  // Start coding here
  let grade;
  switch (true) {
    case (score >= 90 && score <= 100):
      grade = "A";
      break;
    case (score >= 80 && score <= 89):
      grade = "B";
      break;
    case (score >= 70 && score <= 79):
      grade = "C";
      break;
    case (score >= 60 && score <= 69):
      grade = "D";
      break;
    default:
      grade = "F";
  }
  return grade;

}



// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
