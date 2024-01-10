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
