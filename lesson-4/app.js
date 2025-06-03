//? string
//! string is a sequence of characters enclosed in single or double quotes
//! string is a primitive data type in JavaScript
//! string is used to represent text data
//! string is immutable, meaning that once created, it cannot be changed
//! string can be created using single quotes, double quotes, or backticks (template literals)
//! string can be concatenated using the + operator
//! string can be accessed using index, where the first character is at index 0
//! string can be manipulated using various string methods
//! string is a primitive data type in JavaScript
console.log("Hello World!");

let email = "sadultem@gmail.com";
console.log(email);

//? string concatenation
//! Concatenation is the process of joining two or more strings together
//! We can concatenate strings using the + operator
let firstName = "Temurbek";
let lastName = "Sadullayev";

let fullName = firstName + " " + lastName;
console.log(fullName);

//? string characters
//! Accessing characters in a string using index
console.log(fullName[0]); // T
console.log(fullName[1]); // e
console.log(fullName[2]); // m
console.log(fullName[3]); // u
console.log(fullName[4]); // r
console.log(fullName[5]); // b
console.log(fullName[6]); // e
console.log(fullName[7]); // k

// ? string length
//! The length property returns the number of characters in a string
//! The length property does not count spaces
// ? string length with spaces
//! The length property counts spaces as well
console.log("Temurbek Sadullayev".length); 

// ? string length with email
console.log(email.length);  

// ? string length with first name
console.log(firstName.length);

// ? string length with last name
console.log(lastName.length);

// ? string length with full name
console.log(fullName.length); 

// ? string methods
console.log(fullName.toUpperCase()); // TEMURBEK SADULLAYEV
let result = fullName.toLowerCase();
console.log(result); // temurbek sadullayev
console.log(fullName.indexOf("b")); // 5
console.log(fullName.indexOf("e")); // 1
console.log(fullName.indexOf("z")); // -1 (not found)
console.log(fullName.lastIndexOf("e")); // 17
console.log(fullName.includes("Temurbek")); // true
console.log(fullName.includes("Temur")); // true
console.log(fullName.includes("Sadullayev")); // true
console.log(fullName.includes("Sadul")); // true