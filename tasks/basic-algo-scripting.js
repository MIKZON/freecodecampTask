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


