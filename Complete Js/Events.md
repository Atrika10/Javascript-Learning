# Default Argument in Event
```
let btn = document.querySelector("button");

btn.addEventListener("click", function (e){
    console.log(e.type);    //etc
})
```
##  *`this`* in Event Listeners


## Example :
```
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log(this);      // print button element
    console.log(this.innerText);    // print innerText of button
})
```


* NOTE : Here in this example `this` means `btn` in which we're adding `addEventListener()` function.

## <p style = "color : pink"> Effective use of <i>this</i> </p>

* When we want to use same event on multiple object


```
function changeColor (){
    console.log(this.innerText);
    this.style.color = "Green";
}

btn.addEventListener("click", changeColor);

p.addEventListener("click", changeColor);

h1.addEventListener("click", changeColor);
```

* Here, `this` inside  `changeColor` function mean that object from where it has called.

Like : When `changeColor` function called from btn's addEventListener, it mean `this` point to `btn`.

# KeyBoard Event
```
inp.addEventListener("keydown",(e)=>{
    if(e.code == "KeyU"){
        console.log("move Up")
    }else if(e.code == "KeyL"){
        console.log("move left")
    }
    else if(e.code == "KeyD"){
        console.log("move Down")
    }else if(e.code == "KeyR"){
        console.log("move right");
    }
})

```

## form Event
* we can select `form` in JS & there is a lot of events we can triggured in *form* also.

#### Example :  *`submit`*  event

```
let form = document.querySelector("form");

form.addEventListener("submit", ()=>{
    console.log(" form submitted");
})
```

### <p> Some Important Event </p>

### Change Event
### input Event
