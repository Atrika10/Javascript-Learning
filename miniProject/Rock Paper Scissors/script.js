// track score
let userPoint = 0;
let cmsPoint = 0;
let userScore = document.getElementById("userScore");
let cmsScore = document.getElementById("cmsScore");

// select messageBox
let msg = document.querySelector(".resultMsg");

// select 3 button
let rock = document.getElementById("rockId");
let paper = document.getElementById("paperId");
let scissors = document.getElementById("scissorsId");

// we need to know userChoice & cmsChoice
let userChoice;         // variable to store userChoice

rock.addEventListener("click", () => {
    userChoice = "rock";
    // after getting choice we will start the game
    playGame(userChoice);
})
paper.addEventListener("click", () => {
    userChoice = "paper";
    playGame(userChoice);
})
scissors.addEventListener("click", () => {
    userChoice = "scissors";
    playGame(userChoice);
})

// function for generate random choice
const generateChoice = () => {
    // storing options in array because in js we don't have any function to get any random string but we can get random number which we can use as array index
    let options = ["rock", "paper", "scissors"];
    let randInd = Math.floor(Math.random() * 3); // multiply by 3 so that we can get random value between 0-2 
    return options[randInd]; // this will be our random choice
}

// Main function
const playGame = (userChoice) => {
    // got userChoice & call generateChoice to get cmsChoice
    let cmsChoice = generateChoice();

    if (userChoice === cmsChoice) {

        console.log("draw");
        //update message box
        msg.innerText = "Draw";
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";

    } else {
        let userWin = true;     // to track winner

        if (userChoice === "rock") {
            // computer have 2 choice paper or scissors
            userWin = cmsChoice === "paper" ? false : true;
        }

        else if (userChoice === "paper") {
            userWin = cmsChoice === "rock" ? true : false;
        }
        else {  // if userChoice is scissors
            userWin = cmsChoice === "paper" ? true : false;
        }
        // check the winner
        if (userWin) {
            console.log("userWin");
            userScore.innerText++;
            //update message box
            msg.innerText = "User Win";
            msg.style.backgroundColor = "Green";

        } else {
            console.log("cms win");
            cmsScore.innerText++;

             //update message box
             msg.innerText = "Computer Win";
             msg.style.backgroundColor = "red";
        }
    }

}