// Escape Sequences in Strings
const myStr1 = "FirstLine\n\t\\SecondLine\nThirdLine";


// Concatenating Strings with Plus Operator
const myStr2 = "This is the start. " + "This is the end";


//Concatenating Strings with the Plus Equals Operator
let myStr3 = 'This is the first sentence. ';
myStr3 += 'This is the second sentence.'


//Constructing Strings with Variables
const myName = "hidden";
const myStr4 = "Hi " + myName + "how are u?";

//Appending Variables to Strings
const someAdjective = "Awesome!";
let myStr5 = "Learning to code is ";
myStr += someAdjective


// Find the Length of a String
let lastNameLength = 0;
const lastNameOne = "Lovelace";
lastNameLength = lastName.length; // Change this line


//Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const lastNameSec = "Lovelace";
firstLetterOfLastName = lastName[0]; // Change this line


//Understand String Immutability
let myStr = "Jello World";
myStr = 'Hello World'; // Change this line


//Use Bracket Notation to Find the Nth Character in a String

const lastName1 = "Lovelace";
const thirdLetterOfLastName = lastName1[2]; // Change this line


// Use Bracket Notation to Find the Last Character in a String
const lastName2 = "Lovelace";
const lastLetterOfLastName = lastName2[lastName2.length - 1]; // Change this line

//Use Bracket Notation to Find the Nth-to-Last Character in a String
const lastName3 = "Lovelace";
const secondToLastLetterOfLastName = lastName3[lastName3.length - 2]; // Change this line

//Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = myNoun + ' ' + myVerb + ' ' + myAdjective + ' ' + myAdverb + ' '; // Change this line// Only change code above this line


//Store Multiple Values in one Variable using JavaScript Arrays
const myArray1 = ["string", 2];


//Nest one Array within Another Array
const myArray2 = [[123], ["best"]];


// Access Array Data with Indexes
const myArray3 = [50, 60, 70];
let myData = myArray3[0];


//Modify Array Data With Indexes
const myArray4 = [18, 64, 99];
myArray4[0] = 45


//Access Multi-Dimensional Arrays With Indexes
const myArray5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const myData2 = myArray5[2][1];


//Manipulate Arrays With push()
const myArray6 = [["John", 23], ["cat", 2]];
myArray6.push(["dog", 3]);


//Manipulate Arrays With pop()
const myArray7 = [["John", 23], ["cat", 2]];
const removedFromMyArray1 = myArray7.pop();


//Manipulate Arrays With shift()
const myArray8 = [["John", 23], ["dog", 3]];
const removedFromMyArray2 = myArray8.shift();



//Manipulate Arrays With unshift()
const myArray9 = [["John", 23], ["dog", 3]];
myArray9.shift();
myArray9.unshift(['Paul', 35]);


//Shopping List
const myList = [["firstItem", 2], ["Second", 2], ["Third", 23], ["AAA", 22], ["ktaS", 21]];


// Write Reusable JavaScript with Functions
function reusableFunction() {
  console.log('Hi World');
};
reusableFunction();


//Passing Values to Functions with Arguments
const functionWithArgs = (param1, param2) => {
  console.log(param1 + param2)
};
functionWithArgs(2, 3);


// Return a Value from a Function with Return
const timesFive = (a) => {
  return a * 5
};

// Global Scope and Functions
const myGlobal = 10;

function fun1() {
oopsGlobal = 5;
return oopsGlobal;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//Local Scope and Functions
function myLocalScope() {
  let myVar = 'a'
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);


//Global vs. Local Scope in Functions
const outerWear = "T-Shirt";
function myOutfit() {
  const outerWear = 'sweater';
  return outerWear;
}
myOutfit();


// Understanding Undefined Value returned from a Function
let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum = sum + 5;
}
addThree();
addFive();


//Assignment with a Returned Value
// Setup
let processed = 2;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);


//Stand in Line
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}


// Understanding Boolean Values
function welcomeToBooleans() {
  return true; // Change this line
}


