## Create Array in JS
* Different way of creating array
```
let arr = ["Smile", "Joy", "happiness", "Faith", "Love"];

let numbers = [1,2,3,4,5];

let arr = ["Hello", 2 , "people"];
```

### Array Indices
arr[0], arr[1]............

### Array Methods
#### push() 
Using this function we can add element to end in an array
#### unshift()
Using this function we can add element to start in an array

Example :
``` 
        let arr = [10,20,30,40];
        arr.push(80);   //new arr => 10,20,30,40,80
        arr.unshift(50); //new arr => 50,10,20,30,40,80
```

#### pop() 
Delete last element from array
#### shift() 
Delete from first & return that element

Example : 
``` 
          let arr = [10,20,30,40];
          arr.pop();   //new arr => 10,20,30
          arr.shift(); //new arr => 20,30
```
#### toString() 
This function help us to convert an array to String
* this function will not change the original array

Example :
```
         let arr = [10,20,30];
          arr.toString();
```
#### concat()
Joins multiple arrays & returns result (but it doesn't change in original array) 

Example : 
```      let arr = [1,2,3,4,5];
          let arr2 = [10,20];
          console.log(arr.concat(arr2));
```

Example2 : 
```
        let arr = [1,2,3,4,5];
        let arr2 = [10,20];
        let arr3 = [100,200];
        console.log(arr.concat(arr2, arr3));

```
#### slice (startIndex, endIndex)
Return a piece of the array (it will not change the original array)

Example : 
```
let arr = ["mango", "Orange", "papaya", "banana","mud apples"]

console.log(arr.slice(2,4));  //  [ 'papaya', 'banana' ]

// first index is inclusive but ending index is non inclusive
```
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


# forEach Loop in Array
* forEach is a method in JS & we can use forEach method with an array.
* when we want to perform a task with all element separely of an array we use *forEach method*

### Syntax of forEach
#### array.forEach(callBackFunction)

Example :
```
let arr = ["smile", "Joy", "happy", "positivity"];

arr.forEach((val) =>{
    console.log(val);
})
```

Example2 : 
``` let arr = [10,20,30,40];
// way 1
let arr = [10,20,30,40];
const square = (val) =>{        
    console.log(val*val);
}
arr.forEach(square);    // we can pass a defined function

// way 2
let arr = [10,20,30,40];

arr.forEach((val) =>{
    console.log(val*val);       // we can diret write a function & pass it as a param
});
```

### parameter of forEach method
* forEach mathod takes callBackFunction as it's parameter 
* And this callBackFunction takes *3 param*
=> val   *element of array*

=> index  *index of array*

=> array   *the whole array itself*

* forEach is a *higher order function*

#### NOTE : callBackFunction
A callback is a function passed as an argument to another function.
Example : 
```
arr.forEach((val) =>{
        console.log(val);
})
```
* here we can observe that we passed an *arrow function* as a parameter to another function called *forEach*

# Map function
Creates a new array with the results of some operation. The value its callback returns are
used to form new array

* map is used to create a new array using some returned value based on each value which is stored at the individual indices of the array

* Note :
map is very similar of forEach method; difference is that *map* method return an array after performing operation and *forEach* method doesn't return any array it's just do the mentioned operation.

### Syntax of map method
```
arr.map(callBackFunction(val, idx, array));
```
Example : 
```
let num = [2,4,6];
const newArray = num.map((val)=>{
    return val*val;
});
console.log(newArray);  // [ 4, 16, 36 ]
console.log(num);       // [ 2, 4, 6 ]

// Note original array remain same
```