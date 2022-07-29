//Search and Replace
function myReplace(str, before, after) {
  let newStr = str.split(' ');
  let wordc = after[0].toUpperCase() + after.slice(1 , after.length)
  let result = '';
  for (let i = 0; i < newStr.length; i += 1) {
  if (newStr[i] === before && newStr[i][0] === newStr[i][0].toUpperCase()) {
    result += str.replace(before, wordc);
    return result;
  }
  }
  return str.replace(before, after.toLowerCase())
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");