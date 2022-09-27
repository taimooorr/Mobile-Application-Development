class Employee{
    //Static properties
    static company = "System inc"
    constructor(name,salary){
        this._name = name;
        this._salary =salary;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name=name
    }
    display(){
        return `${this._name} recive  ${this._salary}`;
    }
    static dutyHours(){
        return "4 TO 8 HOURS "
    }
}
let emp = new Employee("Taimoor",40);

class Teacher extends Employee{
    constructor(name,salary,department){
        super(name,salary)
        this._department= department;
    }
    display(){
        return "something"
    }

}
/**
 * Hoisting in JavaScript is a default behavior of moving all declarations
 *  to the top of the current scope (to the top of the current script or the current function).
 * Inevitably, this will also move the initialization of variables and assignments made to them.
 */

