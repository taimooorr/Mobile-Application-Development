const { Console } = require('console');
const { stdin } = require('process');

/**
 * Write program to print the kth digit from last. E.g. input 23617 and k=4 output 3
 */
function kthDigit(num, k) {
    let numStr = num.toString();
    let numArr = numStr.split("");
    let kthDigit = numArr[numArr.length - k];
    return kthDigit;
}
console.log(kthDigit(23617, 4));
/**
 * Problem 2
 */
function sumOfDigits(...args) {
     // we can take arguments as a whole number like num instead of args and then convert it to string and then split it
    let sumStr = args.toString();
    let sumArr = sumStr.split("");
    let sumOfDigits = sumArr.reduce((a, b) => parseInt(a) + parseInt(b));
    return sumOfDigits;
}
console.log(sumOfDigits(123456789));

/**
 * Problem 3
 * 
 */
function evenSum(num){
    // we can take arguments as a whole number like num instead of args and then convert it to string and then split it
    let sumStr = num.toString();
    let sumArr = sumStr.split("");
    let EvenSum = sumArr.map((number) => {
        let result = 0;
        if (parseInt(number) % 2 == 0) {
            result+= parseInt(number);
        }
    });
    return EvenSum ;
}
console.log(evenSum(23617));
/**
 * Problem 4
 */
function squaresAndCubes() {
    let result = [];
    for (let i = 0; i <= 10; i++) {
        result.push({
            number: i,
            square: i * i,
            cube: i * i * i
        });
    }
    return result;
}
console.log(squaresAndCubes());
/**
 * Problem 5
 */
function StrOrNum(StrNum){
    if(isNaN(StrNum)){
        // lets find The position in the string of the left-most vowel in the string
        let vowels = ['a','e','i','o','u','A','E','I','O','U'];
        let result = StrNum.split("").indexOf((char) => {
            return vowels.includes(char);
        });
        return result;
    }
    else {
        let reversedNum =  parseFloat(StrNum.toString().split('').reverse().join('')) * Math.sign(StrNum)
        return reversedNum;
}
}
console.log(StrOrNum("taimoor"));

/**
 * Problem 6
 */
/**
 * fo taking input from user we need to import  or require readline module
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    })
guess = ()=>{
    let randomNum = Math.floor(Math.random() * 10) + 1;
    readline.question(`Enter a number between 1 to 10: `, (number) => {

        if (number == randomNum) {
            console.log("You WIN");
        }
        else {
            console.log("Not matched");
        }
    })
}
guess();

/**
 * Problem 7
 * 
 */
let check =(arr)=> {
    if (arr.length >= 2) {
        if (arr[0] == 10 || arr[arr.length - 1] == 10) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
console.log(check([10, 20, 30, 40]));