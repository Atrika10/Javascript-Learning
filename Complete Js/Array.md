## Create Array in JS
let arr = ["Smile", "Joy", "happiness", "Faith", "Love"];

let numbers = [1,2,3,4,5];

let arr = ["Hello", 2 , "people"];

### Array Indices
arr[0], arr[1]............

### Array Methods
#### push() 
Using this function we can add element to end in an array
#### unshift()
Using this function we can add element to start in an array

Example : let arr = [10,20,30,40];

        arr.push(80);   //new arr => 10,20,30,40,80
        arr.unshift(50); //new arr => 50,10,20,30,40,80


#### pop() 
Delete last element from array
#### shift() 
Delete from first & return that element

Example : let arr = [10,20,30,40];

          arr.pop();   //new arr => 10,20,30
          arr.shift(); //new arr => 20,30

#### toString() 
This function help us to convert an array to String
* this function will not change the original array

Example : let arr = [10,20,30];

          arr.toString();

#### concat()
Joins multiple arrays & returns result (but it doesn't change in original array) 

Example : let arr = [1,2,3,4,5];

          let arr2 = [10,20];
          console.log(arr.concat(arr2));
Example2 : let arr = [1,2,3,4,5];

                     let arr2 = [10,20];
                     let arr3 = [100,200];
                     console.log(arr.concat(arr2, arr3));
#### slice (startIndex, endIndex)
Return a piece of the array (it will not change the original array)

Example : let arr = ["mango", "Orange", "papaya", "banana","mud apples"]

console.log(arr.slice(2,4));  //  [ 'papaya', 'banana' ]

// first index is inclusive but ending index is non inclusive

#### splice (startIndex, delCount, newEl1,....)
Change Original Array
* add
* remove
* replce
We can perform this operation using Splice method.

*splice() take 3 param*
* 1st param => starting index (from where should I start)
* 2nd param => delete element (how many element we want to delete)
* 3rd param => if we want to add new element we can write those using comma (,) 
else we can leave this param empty if we don't want to add new element