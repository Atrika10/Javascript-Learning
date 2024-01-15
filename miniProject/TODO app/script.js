// select input & add task button
let enterTaskInp = document.getElementById("enterTaskInp");
let addTaskBtn = document.getElementById("addTaskBtn");

let userText ="";
// button should be disable if we don't have any text

enterTaskInp.addEventListener("change", (e)=>{
    userText = enterTaskInp.value; 
    console.log(enterTaskInp.value);
});

addTaskBtn.addEventListener("click", (e)=>{
    // each time when I click add task button, it will create a div & show userText inside div

    let eachTask = document.createElement("div");
    eachTask.setAttribute("class", "eachTaskStyle");
    eachTask.innerText = userText;

    //select where will you append
    let taskBox = document.getElementById("taskBox");
    taskBox.append(eachTask);

    // should remove all the text inside input box
    enterTaskInp.value = "";
    userText = "";      // must be clear else if we click button; the prev task will be added
})
