let text = "Akhil Guduri";

let result = text.length;
console.log(result);

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());


// charAt gives the characteer at specified index
console.log(text.charAt(1));
console.log(text.charAt(text.length - 2));

// charCodeAt() method returns the unicode of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).
let char = text.charCodeAt(0);
console.log(char);

console.log(text.indexOf("l"));


// A string can be converted to an array with the split() method:
console.log(text.split(""))



// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

let newText = text.replace("Guduri", "Reddy" );
console.log(newText);


// To replace case insensitive, use a regular expression with an /i flag (insensitive):

// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

let animal = "I love cats. Cats are very easy to love. Cats are very popular";
animal = animal.replaceAll(/Cats/g,"Dogs");
animal = animal.replaceAll(/cats/g,"dogs");
console.log(animal);


console.log(text.trim().startsWith("Akhil"));

console.log(text.trim().toLowerCase().startsWith("Akhil"));
console.log(text.toLowerCase().includes("hil"));
console.log(text.slice(0, 6));
console.log(text.slice(-6));

const person = {
  name: "akhil",
  greeting: function () {
    console.log("Hey how are you??");
  },
};
console.log(person);
console.log(person.name);
console.log(person.greeting());


let text1 = "  Akhil Guduri   ";
console.log(text1);
console.log(text1.trim());
console.log(text1.trimStart());
console.log(text1.trimEnd());


// pad
// pad method pad a string , if we want tp pad a number we have to convert num to string using numtostring()


// The padStart() method pads a string from the start.

// It pads a string with another string (multiple times) until it reaches a given length.
let text5 = "akhil";
let padded = text5.padStart(6,"G ");
console.log(padded);

let text6 = "akhil";
let padend = text5.padEnd(6,"G ");
console.log(padend);

