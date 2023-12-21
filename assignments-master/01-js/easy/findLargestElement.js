/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max = Number.MIN_VALUE; // initialize max variable with negative infinity 
    for (let i = 0; i < numbers.length; i++) {
        if (max < numbers[i]) {
            max = numbers[i];
        }
    }
    return max;
}
let num = [1, 200, 50, 8, 9];
console.log(findLargestElement(num));