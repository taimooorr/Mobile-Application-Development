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
function evenSum(...args){
    // we can take arguments as a whole number like num instead of args and then convert it to string and then split it
    let sumStr = args.toString();
    let sumArr = sumStr.split("");
    let EvenSum = sumArr.map((number) => {
        let result = 0;
        if (number % 2 == 0) {
            result+= parseInt(number);
        }
        return result;
    });
}
console.log(evenSum(23617));