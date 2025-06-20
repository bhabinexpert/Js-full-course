// pop , sloce, and splice..

let courses = ["python", "js", "java", "dsa"]
// console.log("Courses-", courses);

// let removeItems = courses.pop(); //removes last items
// console.log(removeItems)

// console.log("Updated courses-", courses)

// let value = courses.slice(2,3) // extract the value form 2 index to 3 index but not 3rd index
// console.log(value)
// console.log(courses)

//console.log(courses.splice(0,2)) // from 0th index it will delete 2 values.
console.log(courses)

const newCourses = courses.splice(1, 0, "html-css") // add the value to the first index
console.log(courses)


// Includes:

console.log(courses.includes("python"))
