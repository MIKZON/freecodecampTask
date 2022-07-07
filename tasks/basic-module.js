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


// Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return 'Yes, that was true';
  }
  return 'No, that was false';
};


//Comparison with the Equality Operator
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);


// Comparison with the Strict Equality Operator
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);


//Practice comparing different values
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");


//Comparison with the Inequality Operator
function testNotEqual(val) {
  if (val != "99") { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);


// Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);


// Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);


//Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);


//Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);


//Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);


//Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    if (val >= 25 && val <= 50) {
      return "Yes";
  }
  return "No";
}
testLogicalAnd(10);


//Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);


// Introducing Else Statements
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  }
else {
    result = "5 or Smaller";
  }
  return result;
}

testElse(4);


// Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
 else  {
  return "Between 5 and 10";
 }
}

testElseIf(7);


//Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);


//Chaining If Else Statements
function testSize(num) {

  if (num <= 4) {
    return 'Tiny'
  }
  if (num <= 9) {
    return 'Small'
  }
  if (num <= 14) {
    return 'Medium'
  }
  if (num <= 17) {
    return 'Large'
  }
  else if (num <= 25) {
    return 'Huge'
  }

    else if (num <= 26) {
    return 'Huge'
  }

  else if (num <= 76) {
    return 'Huge'
  }

  else if (num <= 66) {
    return 'Huge'
  }
}

testSize(7);


//Golf code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return names[0]
  };

  if (strokes <= par - 2) {
    return names[1]
  };

  if (strokes === par - 1) {
    return names[2];
  }
else  if (strokes === par + 1) {

  return names[4];
}
else  if (strokes === par) {

  return names[3];
}
else  if (strokes === par + 1) {

  return names[4];
}
else if (strokes === par + 2) {
  return names[5]
}
else if (strokes >= par + 3) {
  return names[6]
}
}


