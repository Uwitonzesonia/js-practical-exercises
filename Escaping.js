function Escaping(){
let EnrolledInCourse = true;
let CompletedTheCourse = false;
let studentName = "Uwitonze";

console.log("Student name: " + studentName);
console.log("Enrolled: " + EnrolledInCourse);
console.log("Completed: " + CompletedTheCourse);

if (EnrolledInCourse) {
  console.log("Welcome " + studentName + " to Udacity!");
}

if (CompletedTheCourse) {
  console.log("Congratulations! You finished the course.");
} else {
  console.log("Keep going! You have not finished the course yet.");
}
}
Escaping();
