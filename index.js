// // DOM practice Questions
// // Create a new button element. Give it a text “click me”, background color of red & text color of white.Insert the button as the first element inside the body tag

// // create a button
// let btn = document.createElement("button");
// btn.innerText =  "click me"     // added text
// btn.style.backgroundColor = "red";  // added styles
// btn.style.color = "white";

// // populate in body 
// let bodyEl = document.querySelector("body");
// bodyEl.prepend(btn);    // prepend method help me to insert this element as the first element inside the body tag


// // Create a <p> tag in html, give it a class & some styling.
// // Now create a new class in CSS and try to append this class to the <p> element.
// // Solve this problem using classList.

// let p = document.querySelector("p");

// // p.setAttribute("class", "newClass"); 
// // if we use setAttribute, it will override our old class

// // we will use classList
// p.classList.add("newClass");
// // we use add method of classList to add new class without override old class or classes


// create a toggle button that changes the screen to dark-mode when cliked & light-mode when clicked again 

let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let currMode = "light";

btn.addEventListener("click", ()=> {
    if(currMode == "light"){
        // change to dark mode
        body.classList.add("nightMode");
        body.classList.remove("lightMode");
        //update currMode
        currMode = "dark";
    }else{
        // if it is dark change to light
        currMode = "light";
        body.classList.add("lightMode");
        body.classList.remove("nightMode")
    }
})