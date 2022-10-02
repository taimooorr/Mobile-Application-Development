/**
 * This Random arrays is used in all operations in this file
 */
const randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/**
 * ARRAY METHODS
 */

// 1. concat()
console.log(randomArray.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

// 2. copyWithin()  
console.log(randomArray.copyWithin(0, 3, 6));

// 3. entries()
const iterator = randomArray.entries();
for (let e of iterator) {
    console.log(e);
    }

// 4. every()
console.log(randomArray.every(x => x < 11));

// 5. fill()
console.log(randomArray.fill(0, 2, 5));


// 6. filter()

console.log(randomArray.filter(x => x > 5));

// 7. find()
console.log(randomArray.find(x => x > 5));


// 8. findIndex()
console.log(randomArray.findIndex(x => x > 5));

// 9. forLast()
randomArray.findLast(x => x > 5);


