// TASK is to change status & content of button
let st = document.getElementsByClassName("status")[0];  
let btn = document.getElementsByTagName("button")[0];

// ".getElementsByClassName" & ".getElementsByTagName" both  methods return collections (arrays-like objects) of elements, not single elements.we need to specify which element you want to access within the collection. here we use first element of array

let flag = 1; // means => currently she is not friend
btn.addEventListener("click", () => {
    if (flag == 1) {
        btn.innerText = "Remove Friend";
        btn.style.backgroundColor = "red"
        // status will be friend
        st.innerText = "Friend";
        // update flag
        flag = 0;
    } else {  // means flag =0 now
        btn.innerText = "Add Friend";
        btn.style.backgroundColor = "green"
        // update status
        st.innerText = "Unknown";
        // update flag
        flag = 1;
    }
});

// When we move our mouse to image; opacity should be change
// first select image
let img = document.querySelector("img");
img.addEventListener("mouseover", ()=>{
    img.style.opacity = "0.8"
    console.log("hovering")
})
img.addEventListener("mouseleave", ()=>{
    img.style.opacity = "1"
})