## Create Array in JS

- Different way of creating array

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

- this function will not change the original array

Example :

```
         let arr = [10,20,30];
          arr.toString();
```

#### concat()

Joins multiple arrays & returns result (but it doesn't change in original array)

Example :

```let arr = [1,2,3,4,5];
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

- add
- remove
- replce
  We can perform this operation using Splice method.

_splice() take 3 param_

- 1st param => starting index (from where should I start)
- 2nd param => delete element (how many element we want to delete)
- 3rd param => if we want to add new element we can write those using comma (,)
  else we can leave this param empty if we don't want to add new element

# forEach Loop in Array

- forEach is a method in JS & we can use forEach method with an array.
- when we want to perform a task with all element separely of an array we use _forEach method_

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

```let arr = [10,20,30,40];
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

- forEach mathod takes callBackFunction as it's parameter
- And this callBackFunction takes _3 param_
  => val _element of array_

=> index _index of array_

=> array _the whole array itself_

- forEach is a _higher order function_

#### NOTE : callBackFunction

A callback is a function passed as an argument to another function.
Example :

```
arr.forEach((val) =>{
        console.log(val);
})
```

- here we can observe that we passed an _arrow function_ as a parameter to another function called _forEach_

# Map method

### Defination

Creates a new array with the results of some operation. The value its callback returns are
used to form new array

- map is use to create a new array using some returned value based on each value which is stored at the individual indices of the array

- Note :
  map is very similar of forEach method; difference is that _map_ method return an array after performing operation and _forEach_ method doesn't return any array it's just do the mentioned operation.

### Syntax of map method

```
arr.map(callBackFunction(val, idx, array));
```

#### Example :

```
let num = [2,4,6];
const newArray = num.map((val)=>{
    return val*val;
});
console.log(newArray);  // [ 4, 16, 36 ]
console.log(num);       // [ 2, 4, 6 ]

// Note original array remain same
```

# filter method

### Defination

Work of this method is to traverse all the indices of an array & filter out some value (based on some conditions) and return new array.

### Syntax of filter method

```
array.filter(callBackFunction(val));
```

#### Example : Give me those values which are even

```
let num = [2,3,4,5];
const newArray = num.filter((val) =>{
    return val%2 ==0;
})
console.log(newArray);  // [2,4]
console.log(num);       // [2,3,4,5]

// it return only those values which fullfill the given conditions in a new Array
```

#### Example2 : Give me all value which are greater than 5

```
let num = [4,5,2,8,7];
const newArray = num.filter((val)=>{
    return val>5;
})
console.log(newArray);  // [ 8, 7 ]
console.log(num);       // [ 4, 5, 2, 8, 7 ]
```

# reduce Method

### Defination

Performs some operations & reduces the array to a _single value_. It returns that single value.

### when will you use _reduce_ method

You can take multiple value as an input but you have to return only one single value. Then you can use _reduce method_.

### Syntax of reduce method

```
array.reduce(callBackFunction(result, value));

```

callBack function of _reduce_ method take 2 parameter

- 1st param is the result param which will be return at the end as final result
- 2nd param is the value or you can say current value

#### Example : Return sum of all elements in an array

```
let num = [10,20,30,40];
const sum = num.reduce((res, val)=>{
    return res+val;
})
console.log(sum);   // 100
```

- _res_ will be initialize with 1st element of array (here it is 10);
- _val_ will be initialize with 2nd element of array (here it is 20);

# Spread

- Expand an iterable into multiple values

### Synatx of spreed

`function myFunc(...arr){
    // do something
}`

### Example :

```
// spread in array

let array = [20,10,30,40];
console.log(Math.min(...array)); // 10

// spread in String
console.log("atrika");  //atrika
console.log(..."atrika");   // a t r i k a
```

## Spread with Array literals

- when we need to make a copy of an Array in a new Array; we can do this using _loop_ as well as _spread_.

- Similarly, We can create an character array by passing all char individually of a*string*.

#### Example :

```
let array = [20,10,30,40];
let newArr = [...array];
console.log(newArr); // [ 20, 10, 30, 40 ]
```

- NOTE :In above example, we're Creating a copy of array by passing all the element individually using _spread_

```
let str = "universe";
let arr = [..."str"];
console.log(arr); // [ 's', 't', 'r' ]
```

#
### <p style = "color : rgb(102, 204, 255)"> We can pass multiple array / string using *spread* but here order is important

#### Example:
```
let arr = [1,3,5,7];
let arr2 = [2,4,6,8];
let arr3 = [...arr, ...arr2];
console.log(arr3);
[
  1, 3, 5, 7,
  2, 4, 6, 8 
]

let arr4 = [...arr2, ...arr];
console.log(arr4);
[
  2, 4, 6, 8,
  1, 3, 5, 7
]
```

#
## Spread With Object Literals

- When we want to add new _key value pair_ in our object & make a copy of it. we can do it using _spread_ very easily.

### Example :

```
const data = {
    email : "abc@gmail.com",
    password : "123"
}

const newData = {...data, id : 4};
console.log(newData);

//{ email: 'abc@gmail.com', password: '123', id: 4 }
```

- NOTE :
<p style="font-size: 1rem; color : rgb(252, 164, 186)">We can store the value of an array/String in a object using <i><b>spread</b></i> easily. </p>

#### Example : Array to object

```
let arr = [10,20,30,40];
let arrObject = {...arr};
console.log(arrObject);

{
 '0': 10,
 '1': 20,
 '2': 30,
 '3': 40
}
```
* NOTE : Here in *arrObject* indices of *arr* is stored as *key* & value of *arr* is stored as *pair*. 
#### Example2 : String to object

```
let str = "smile";
let strObject = {...str};
console.log(strObject);
{ 
    '0': 's',
    '1': 'm',
    '2': 'i',
    '3': 'l',
    '4': 'e' 
}
```
* NOTE : Here in *strObject* indices of *str* is stored as *key* & value of each indices of *str* is stored as *pair*. 
