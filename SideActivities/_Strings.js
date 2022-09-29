/**
 * This String will be used  for  all operations in this file
 */
const randomString = "This is a random string";

/**
 * Methods for  String  object
 *
 * */
// 1. charAt()
console.log(randomString.charAt(5));
// 2. at()
console.log(randomString.at(-1));

// 3. charCodeAt()
console.log(randomString.charCodeAt(5));

// 4. codePointAt()
console.log(randomString.codePointAt(1));

// 5. concat()
console.log(randomString.concat(" and this is another string").concat(" and this is another string"));

// 6. includes()
console.log(randomString.includes("Hello"));

// 7. endsWith()
console.log(randomString.endsWith("string"));

// 8. indexOf()
console.log(randomString.indexOf("random"));

// 9. lastIndexOf()
console.log(randomString.lastIndexOf("554"));


// 10. match()
/* console.log(randomString.match(/random/));

// 11. matchAll()
console.log(randomString.matchAll(/random/)); */

// 12. normalize()
/* console.log(randomString.normalize()); */

// 13. padEnd()

console.log(randomString.padEnd(20, "Hello"));

// 14. padStart()
console.log(randomString.padStart(20, "Hello"));

// 15. repeat()

console.log(randomString.repeat(100));

// 16. replace()
console.log(randomString.replace("random", "Hello"));


// 17. search()
console.log(randomString.search("random"));

// 18. slice()
console.log(randomString.slice(0, 5));

// 19. split()
console.log(randomString.split(" "));
console.log(randomString.split(" ", 2));

// 20. startsWith()
console.log(randomString.startsWith("This"));

// 21. substring()
console.log(randomString.substring(0, 5));

// 22. toLocaleLowerCase()  // 23. toLocaleUpperCase()
console.log(randomString.toLocaleLowerCase());

// 24. toLowerCase()  // 25. toUpperCase()

console.log(randomString.toUpperCase());

// 26. trim()
console.log(randomString.trim());








