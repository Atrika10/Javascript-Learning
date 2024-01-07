// select input & add task button
let enterTaskInp = document.getElementById("enterTaskInp");
let addTaskBtn = document.getElementById("addTaskBtn");

let userText;
enterTaskInp.addEventListener("change", (e)=>{
    userText = enterTaskInp.value; 
})

addTaskBtn.addEventListener("click", ()=>{
    console.log(userText);
    // each time when I click add task button, it will create a div & show userText inside div

    let eachTask = document.createElement("div");
    eachTask.style.backgroundColor = "blue";
    eachTask.setAttribute("class", "eachTaskStyle");
    eachTask.innerText = userText;

    //select where will you append
    let taskBox = document.getElementById("taskBox");
    taskBox.append(eachTask);
})
