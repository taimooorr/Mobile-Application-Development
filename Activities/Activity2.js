/**
 * Task 1
 */

function sandwich(bread, cheese) {
    let total;
    if (bread / 2 === cheese) {
        return total = cheese;
    }
    else if (cheese === 1) {
        return total = 1;
    }
}
console.log(sandwich(4, 2));

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};


/**
 * Task 2
 * Program to list properties of a javascript object 
 */
console.log(Object.keys(student));


/**
 * Task 3
 * 
 */
function deleteProperty(obj, key) {
    console.log(student);
    delete obj[key];
    return obj;
}
let deleteRollNo = deleteProperty(student, "rollno");
console.log(deleteRollNo);
