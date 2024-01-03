// select boxes
let boxes = document.querySelectorAll(".box");

// loop through all the elements
let turn = "X";
let prevTurn = turn;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // click korle oi box e turn e je lekha ache seta uthbe
        if (prevTurn == "X") {

            box.innerHTML = "0";
            // update prevTurn
            prevTurn = "0";
        } else {
            box.innerHTML = "X";
            prevTurn = "X";
        }

        // You can't change box value more than once, that's why we disabled button
        box.disabled = true;
        isWin(); // each time we will call isWin function to check is any player win after playing his turn 

    })
})

// In tic tac toe we have 8 winning pattern 
// store 8 winning pattern in a 2d array
let winningArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const isWin = () => {
    // loop through all the indices of array
    for(idx of winningArray){   // idx is each index of winningArray
        let val1 = boxes[idx[0]].innerText;
        let val2 = boxes[idx[1]].innerText;
        let val3 = boxes[idx[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != "" && val1 === val2 && val2 === val3){
            // show this in page
            // step -1; select p tag & step -2 visible that class
            let win = document.querySelector(".win")

            win.innerHTML = win.innerHTML + " "+ val1; // add winning player
            win.style.visibility = "visible";

            // once game is over disable all button so that no one can play; can only restart the game
            boxes.forEach((box) =>{
                box.disabled = true;
            })

            console.log("winner", val1);
        }
    }
}

// reset game
// select reset button
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
        // enable button
        box.disabled = false;
    })

    // when we reste our game win message div must be removed
    let win = document.querySelector(".win")
    win.style.visibility = "hidden";
    win.innerText = "Winner";  // reset innerText else it will append all the result
})

