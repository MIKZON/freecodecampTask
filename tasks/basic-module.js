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


//Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";
switch(val) {
  case 1:
  answer = 'alpha'
  break;
  case 2:
  answer = 'beta'
  break;
  case 3:
  answer = 'gamma'
  break;
  case 4:
  answer = 'delta'
  break;
}
  return answer;
}

caseInSwitch(1);


//Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";
switch(val) {
  case 'a':
  answer = 'apple';
  break;
  case 'b':
  answer = 'bird';
  break;
  case 'c':
  answer = 'cat';
  break;

  default:
  answer = 'stuff';
  break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

//Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    answer = 'Low';
    break;
  case 4:
  case 5:
  case 6:
    answer = 'Mid';
    break;

  case 7:
  case 8:
  case 9:
    answer = 'High';
    break;
}
  return answer;
}

sequentialSizes(1);


//Replacing If Else Chains with Switch
function chainToSwitch(val) {
  let answer = "";
switch (val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
   case 7:
    answer = "Ate Nine";
    break;

}
  return answer;
}
chainToSwitch(7);


//Returning Boolean Values from Functions
function isLess(a, b) {
  return a < b
}

isLess(10, 15);


//Return Early Pattern for Functions
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);


//Counting Cards
let count = 0;
function cc(card) {
  switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count += 1;
    break;

  case 7:
  case 8:
  case 9:
    count += 0;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count -= 1;
    break;
}
  return count > 0 ? `${count} Bet` : `${count} Hold`
};


//Build JavaScript Objects
const myDog = {
  name: "barkleey",
  legs: 4,
  tails: 4,
  friends: [2],
};


//Accessing Object Properties with Dot Notation
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt    // Change this line


//Accessing Object Properties with Bracket Notation
const testObj1 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = testObj1['an entree'];   // Change this line
const drinkValue = testObj1['the drink'];    // Change this line


// Accessing Object Properties with Variables
const testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;  // Change this line
const player = testObj2[playerNumber];   // Change this line


//Updating Object Properties
const myDog5 = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog5.name = "Happy Coder";


//Add New Properties to a JavaScript Object
const myDog7 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog7.bark = 'bow-wow';


// Delete Properties from a JavaScript Object
const myDog8 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog8.tails

//Using Objects for Lookups
function phoneticLookup(val) {
  let result = "";
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");


//Testing Objects for Properties
function checkObj(obj, checkProp) {
  return obj.hasOwnProperty(checkProp) ? obj[checkProp] : 'Not Found';
}


//Manipulating Complex Objects
myMusic.push({'artist': 'Michael Jackson', 'title': 'Piano Man', 'release_year': 133, 'formats': ['asd', 'tset', 'ad']});
console.log(myMusic);


//Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside['glove box'];


//Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
const secondTree = myPlants[1].list[1]
console.log(secondTree);


//Record Collection
skipped, vernutsya


//Iterate with JavaScript While Loops
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i -= 1;
  console.log(myArray);
}


// Iterate with JavaScript For Loops
const myArray4 = [];
for (let i = 1; i <= 5; i += 1) {
  myArray4.push(i)
}
console.log(myArray4);


//Iterate Odd Numbers With a For Loop
const myArray7 = [];
for (let i = 1; i < 10; i += 2) {
  myArray7.push(i)
}


//Count Backwards With a For Loop
const myArray6 = [];
for (let i = 9; i >= 1; i -= 2) {
  myArray6.push(i)
}


//Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];
let total = 0
for (let i = 0; i < myArr.length; i += 1) {
  total += myArr[i];
  console.log(total)
}


//Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      product *= arr[i][j]
    }
  }
  return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


//Iterate with JavaScript Do...While Loops
const myArray24 = [];
let j = 10;
do {
   myArray24.push(j);
  i++;
} while (j < 5);



//Replace Loops using Recursion
function sum(arr, n) {
  if (n <= 0) {
    return n;
  };
  return sum(arr, n - 1) + arr[n - 1];
}


//Profile Lookup






// Generate Random Fractions with JavaScript
function randomFraction() {
  return Math.random();
};


//Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
};


