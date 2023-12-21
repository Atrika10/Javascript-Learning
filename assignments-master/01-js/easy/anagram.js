/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // step -1 if length is not equal
  if (str1.length != str2.length) {
    return false;
  }

  // step -2
  let arr = new Array(26); // create an array 
  // initialize with 0
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0;
  }

  // traverse string1 & increase the count of letter
  let string = "a";
  let val = string.charCodeAt(0); // storing the ascii value of a to calculate index of char
 
  for (let i = 0; i < str1.length; i++) {
    // find index of char in our array
    let index = str1.charCodeAt(i) - val;
    
    arr[index]++;
  }

  // traverse str2
  for (let i = 0; i < str2.length; i++) {
    // find index of char in our array
    let index = str2.charCodeAt(i) - val;

    if (arr[index] == 0) {
      return false;
    } else {
      arr[index]--;
    }
  }
  return true;
}

let ans = isAnagram("spar", "rasp");
console.log(ans);

