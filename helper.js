const courses = [];

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

export default {
  getCourseByName,
  addCourse,
  courses,
};
