// Ko'p ishlatiladigan string metodlar

let email = "sadultem@gmail.com";

// indexOf
// birinchi turgan pozitsiyadagi harakterni aniqlashda ishlatilinadi
let result = email.indexOf("a");
console.log(result);

// lastIndexOf()
// oxirgi turgan pozitsiyadagi harakterni aniqlashda ishlatilinadi
let result1 = email.lastIndexOf("a");
console.log(result1);

// slice()
// slice() - bu metod stringning bir qismini olishda ishlatiladi
let result2 = email.slice(9, 11);
console.log(result2);

// slice() metodining boshqa ishlatilishi ya'ni bunda berilgan sondan kegingi sitringlarni olishda ishlatiladi
let result3 = email.slice(5);
console.log(result3);

// substr()
// substr() - bu metod stringning berilgan pozitsiyadan boshlab berilgan uzunlikdagi qismini olishda ishlatiladi
let result4 = email.substr(9, 11);
console.log(result4);

// replace()
// replace() - bu metod stringdagi berilgan qismni almashtirishda ishlatiladi
let result5 = email.replace("gmail", "yandex");
console.log(result5);

// charAt()
// charAt() - bu metod berilgan indeksdagi harakterni qaytaradi
let result6 = email.charAt();
console.log(result6);

// toUpperCase() - toLowerCase()
// toUpperCase() - bu metod stringni katta harflarga aylantiradi
let result7 = email.toUpperCase();
console.log(result7);

// toLowerCase() - bu metod stringni kichik harflarga aylantiradi
let result8 = email.toLowerCase();
console.log(result8);

// trim()
// trim() - bu metod stringning boshidagi va oxiridagi bo'shliqlarni olib tashlaydi
let result9 = "   Hello World!   ".trim();
console.log(result9); // "Hello World!"

// split()
// split() - bu metod stringni berilgan ajratgich bo'yicha bo'lib, massivga aylantiradi
let result10 = email.split("@");
console.log(result10); // ["sadultem", "gmail.com"]

// split() metodining boshqa ishlatilishi ya'ni bunda har bir harakterlarni massivga aylantirishda ishlatiladi
let result11 = email.split("");
console.log(result11); // ["s", "a", "d", "u", "l", "t", "e", "m", "@", "g", "m", "a", "i", "l", ".", "c", "o", "m"]

// split() metodining yana bir ishlatilishi bunda berilgan ajratgich bo'yicha bo'lib, massivga aylantiradi
let result12 = "Hello World!".split(" ");
console.log(result12); // ["Hello", "World!"]
