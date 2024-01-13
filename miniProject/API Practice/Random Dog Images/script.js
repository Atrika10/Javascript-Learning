console.log("okay");
let url = "https://dog.ceo/api/breeds/image/random";

const getData = async () =>{
    const response = await fetch(url);  // it will return a promise

    // convert into JSON
    const jsonData = await response.json(); // it will also return a promise
    console.log(jsonData); // I'm getting two things 'message' & 'success'

    // show images into dom
    let imgTag = document.getElementById("imgBox");

    imgTag.setAttribute("src", jsonData.message);
}

// Now when we want to click button we should get our images
let btn = document.getElementById("btn");
btn.addEventListener("click", getData);