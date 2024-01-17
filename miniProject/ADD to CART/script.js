console.log("okay");
let cartBtn = document.getElementById("cartBtn");

let i =0;
cartBtn.addEventListener("click", ()=>{
    // after clicking cart button there will be 2 task
    // first => show the message
    // second => increase count in cart button

    // to show the message, we should create a message
    let msg = document.createElement("p");
    msg.innerText = "Product is added";

    // where to append ( after image )
    let productImage = document.getElementById("productImage");
    productImage.after(msg);

    // update the count in cart
    let count = document.getElementById("count");
    let value = parseInt(count.innerText);   // we should parse it to int else it will be treated as string
    count.innerText = value+1;

    // should hidden add to cart button
    cartBtn.style.visibility = "hidden";
})