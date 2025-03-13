const students = [];
const courses = [];

// 1. Get course by name
function getCourseByName(courseName) {
  return courses.find(course => course.courseName === courseName);
}

// 2. Add new course
function addCourse(name, duration, dateOfStarting) {
  const newCourse = {
    courseName: name,
    duration: duration,
    dataofStarting: dateOfStarting // Note: property name matches the user's example
  };
  courses.push(newCourse);
}

// 3. (Assumed) Add new student
function addStudent(studentInfo) {
  students.push(studentInfo);
}


// Add a course
addCourse("Node JS", "60H", "12-12-2025");

// Get a course
const nodeCourse = getCourseByName("Node JS");
console.log(nodeCourse);
/* Output:
{
  courseName: "Node JS",
  duration: "60H",
  dataofStarting: "12-12-2025"
}
*/

// Add a student (example usage)
addStudent({ name: "John Doe", studentId: 123 });