// Arrays to store students and courses
let students = [];
let courses = [];

// Function to get course by name
function getCourseByName(courseName) {
  return courses.find((course) => course.courseName === courseName);
}

// Function to add a new course
function addCourse(courseName, duration, dateOfStarting) {
  const newCourse = {
    courseName: courseName,
    duration: duration,
    dateOfStarting: dateOfStarting,
  };
  courses.push(newCourse);
}

// Example usage
addCourse("node js", "60H", "12-12-2025");
console.log(getCourseByName("node js"));
// Function to add a new student
