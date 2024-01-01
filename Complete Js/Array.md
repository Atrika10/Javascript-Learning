## Create Array in JS
let arr = ["Smile", "Joy", "happiness", "Faith", "Love"];
or
let numbers = [1,2,3,4,5];
or
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
