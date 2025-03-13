import { courses, getCourseByName, addCourse } from "./helper.js";
import { v4 as uuidv4 } from "uuid";


addCourse("Node JS");
addCourse("php JS");
var nodecorse = getCourseByName("Node JS");

console.log(nodecorse);
console.log(courses);
console.log(uuidv4());
