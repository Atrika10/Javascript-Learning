# Synchronous 
Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

* Example of Synchronous Programming

# Asynchronous
Due to Synchronous Programming, sometimes imp instructions get blocked due to some previous instruction, Which causes a delay in the UI.Asynchronous code execution allows to execute next instructions immediately & doesn't block the flow.

* Example of Asynchronous Programming



## CallBack
CallBack is a function which is passed as an argument to another function.

There are 2 way we can pass a callBack function

1> By passing Function name only

2> By passing entire function 

### Callback hell
nested callback, ek callback er moddaya r ek callback
This is difficult to understand & manage

* Example : Let's say we want a data after getting previous data

```
// function for getData
    
function getData (dataId, getNextData){
    setTimeOut(()=>{
        console.log(dataId);
        if(getNextData){    // if it exist
            getNextData();
        }
    },2000);
}

// calling function

getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4);
        })
    })
})
```
* This is called callBack hell, it becomes difficult to understand & manage.

# Promises
Promises is for eventual completion of task. it is an object in JS.

### Syntax
```
let promises = new Promise ((resolve, reject) => {
    // do something
})
```
* NOTE : `resolve` & `reject` are  `functions` created by JS (internally).

* we can complete any `promise` using `resolve` or `reject`.

#### Example : 
```
// create a promise

let promise = new Promise((resolve, reject)=>{
    resolve("success"); // this is the message we want to show 
})

// reject promise
let pr = new Promise((resolve, reject) =>{
    reject("some error");
})
```
#### Promise has 3 State
* pending   : The result is undefined
* Fullfield / resolve : result is a value (work completed successfully) 
* reject : The result is an error object (work completed but unsuccessfull) 

#### NOTE
* Generally, we don't write `promise`, we request data from API, & it's return `promise`. Then we extract data from `promises` & work on them.


## How to use promises ?
* If we get a promise ; either it is fullfiled or it is rejected so We Have 2 function to handle this cases. 

* When promise is `resolved` we use `.then()` function. This function has a parameter `result` which is a message passed by `resolve`.

* When promise is `reject` we use `.catch()` function. This function has a parameter `error` which is a message passed by `reject`.

 ### Example :  <p style = "color : deeppink; font-size : 15px"> Promise.then((res)=>{ .... }) </p>
 ```
 const getPromise = () =>{
    return new Promise((res, rej)=>{
       // do something
        rej("promise is successfull");
    })
}

let pr = getPromise();
pr.then((result)=>{
    console.log("get resolve message => ", result);
})
 ```

### <p style = "color : deeppink; font-size : 15px"> Promise.catch((err)=>{ .... }) </p>
 ```
 const getPromise = () =>{
    return new Promise((res, rej)=>{
       // do something
        rej("promise unsuccessfull");
    })
}

let pr = getPromise();
pr.catch((error)=>{
    console.log("got reject message", error);
})
 ```


# What is Promise Chain

When we want some data after getting (resolving) prevoius data, we use promise chainning.

### Example :
```
const func1 = () =>{
    return new Promise((res, rej) =>{

        setTimeout(()=>{
        res("data1 resolved");

        }, 3000);
    })
    
}
const func2 = () =>{
    return new Promise((res, rej) =>{

        setTimeout(()=>{
        res("data2 resolved");

        }, 3000);
    })
    
}

let data1 = func1(); // this function will return Promise

// handle promise
data1.then((res)=>{
    console.log(res);
    // after getting data1 we want data2
    func2().then((result)=>{
        console.log(result);    // data2 resolved
    })
})
```

* NOTE : Calling `func2` inside `.then()` of *data1*.
* If we want to call another function after getting *data2* we can call that function inside `.then()` of *data2* & so on.

#### Simple way of using `Promise chaining`
```
func1().then((res)=>{
    console.log(res);
    return func2();
}).then((res)=>{
    console.log(res);
})
```
* Note : Instead of writing `.then()` inside of another `.then()`, we're returning next function call & using `.then()` on it.

#
# Async-Await

* We use `async` keyword in a function to make that function *Asynchronous*.
* *Async Function always returns a promise*.

### Syntax
```
asyncs function myFunction() {
    // do something
}
```
### Await

* `await` pauses the execution of its surrounding async function until the promise is settled.

* <p style = "color : pink "> <i> await is only valid in async function </i> </p>

* We can't use `await` any other place without `async` function.

## Example of using async-await

```
function getData(dataId){
    return new Promise ((res, rej) =>{
        setTimeout(()=>{
            console.log("data", dataId);
            res("successfull");
        },2000);
    })
   
}
async function myFunction (){
    
    await getData(1);   // 1st call
    await getData(2);   // 2nd call
    // ...... 
}
myFunction();
```
*   NOTE :  
    * `getData()` function return a promise
    * Make another function (`myFunction`) with `async` *keyword*. And use `await` inside `async` function.
    * lastly call `async` function.
    * `getData(2)` will call after completing first call. 
    * `getData(1)` stops it's next instruction until its own work is complete.

#### Problem :
* we can't use `async-await` directly we have to make another function to use this. In previous example it is `myFunction`.

* To Solve this problem we use `IIFE`.

## IIFE => Immediately Invoked Function Expression
* `IIFE` is a function but doesn't have any name.

* This function is called immediately at the time of defined. We don't have to call manually.

* We can use IIFE only one time.

### Syntax
* 3 Way of difinig *IIFE*
```
// 1st way ( )(); in first parenthesis we've to define our normal function

( function( a, b){
    console.log(a+b);
} )();

// 2nd way Arrow Function

( (a,b)=>{
    console.log(5+6);
} )();

// 3rd way Async Function

(async function(){
    await getData(1); 
    await getData(2); 
})();

```
* NOTE :
    * Here in 3rd way, we have not give any name of `async` function; we enclose entire `async function` inside a parenthesis ( ) & then one parenthesis. It is called automatically.