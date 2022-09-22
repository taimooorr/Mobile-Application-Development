// create a function named Student with properties name, reg, and gpa

function Student(name, reg, gpa){
    this.name = name;
    this.reg = reg;
    this.gpa = gpa;
}
//crete another function that create and return an array of 3 students

function createStudents(){
    function Student(name, reg, gpa) {
        this.name = name;
        this.reg = reg;
        this.gpa = gpa;
    }
    let students = [];
    students.push(new Student("Ahsan", 042, 3.5));
    students.push(new Student("Umair", 011, 3.0));
    students.push(new Student("Taimoor", 026, 2.8));
    return students;
}

 


/**
 * Task 3
 * Use filter function to filter students with gpa greater than 3.0
 */
let students = createStudents();
console.log(students);
let filteredStudents = students.filter(function(student){
    return student.gpa > 3.0;
});
console.log(filteredStudents);



function Who(name) {
    console.log(`Hello ${name}`)
}
Who("Taimoor");

/**
 * Task 4
 * create arrow function that accept any number of arguments
 * separate even and odd numbers and return an object with two properties even and odd
 */

/**
 * Todo: Complete the function
 */
let OBJ_1 = (...args) => {
    let arr = []
    args.push(arr)
    let Even = [];
    let Odd = [];
    arr.map((number) => {
        if (number % 2 == 0) { Even.push(number / 2); }
        else {
            Odd.push(number * 2);
        }
    });
    return { ODD: Odd, EVEN: Even };
}
OBJ_1(1,3,5,7,8,9,10,11,12,13,18,99,100);
