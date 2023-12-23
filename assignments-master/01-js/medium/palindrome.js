/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();  // change entire string in Lowercase or uppercase to compare each letter (according to the question)
  let n = str.length;
  let i =0; let j=0;
  while (i<n/2) {
    let f = str.charCodeAt(i);
    let l = str.charCodeAt(n-i-1);
    if(f != l){
      return false;
    }
    i++;
  }
  return true;
}
console.log(isPalindrome("Nan"));
module.exports = isPalindrome;
