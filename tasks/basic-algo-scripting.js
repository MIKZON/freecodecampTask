//Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
convertCtoF(30);


//Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('')
}

reverseString("hello");


//Factorialize a Number
function factorialize(num) {
  if (num === 0) {
    return 1
  }
  return num * factorialize(num - 1);
}

factorialize(5);


//Find the Longest Word in a String
function findLongestWordLength(str) {
  const arrLength = str.split(' ').map((e) => e.length)
    return arrLength.reduce((a, b) => a > b ? a : b);
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");


//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let result = ''
  for (let i = 0; i < num; i += 1) {
    result += str;
  }
  return result;
}

repeatStringNumTimes("abc", 3);


//Boo who
function booWho(bool) {
  if (bool === true) {
    return true;
  } else if (isNaN(bool)) {
    return false;
  }
  return !bool;
}

booWho(null);


//Falsy Bouncer
function bouncer(arr) {
  return arr.filter((x) => x)
}

bouncer([7, "ate", "", false, 9]);


//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  return arr.map((x) => x.reduce((a, b) => a > b ? a : b))
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



//Title Case a Sentence
function titleCase(str) {
  const newStr = str.toLowerCase();
 return newStr.split(' ').map((x) => x[0].toUpperCase() + x.substr(1)).join(' ')
}

titleCase("I'm a little tea pot");


//Confirm the Ending
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target
}
confirmEnding("Bastian", "n");


//Truncate a String
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...'
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);