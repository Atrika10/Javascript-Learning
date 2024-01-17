let cartBtn = document.getElementById("cartBtn");

// to show the message, we should create a message
let msg = document.createElement("p");
msg.innerText = "Product is added";

// Now there should a option to add more & remove from cart also
// create a add more button
let addMoreBtn = document.createElement("button");
addMoreBtn.innerText = "+";

// remove cart button
let removeBtn = document.createElement("button");
removeBtn.innerText = "-";

cartBtn.addEventListener("click", () => {
    // after clicking cart button there will be 2 task
    // first => show the message
    // second => increase count in cart button

    // where to append ( after image )
    let productImage = document.getElementById("productImage");
    productImage.after(msg);

    // update the count in cart
    updateCount();

    // should hidden add to cart button
    cartBtn.style.visibility = "hidden";
    
    //append add more button
    cartBtn.before(addMoreBtn);
    cartBtn.before(removeBtn);

})

function updateCount() {
    let count = document.getElementById("count");
    let value = parseInt(count.innerText);   // we should parse it to int else it will be treated as string
    count.innerText = value + 1;
}

function decCount() {
    let count = document.getElementById("count");
    let value = parseInt(count.innerText);   // we should parse it to int else it will be treated as string
    if (value == 1) {
        cartBtn.style.visibility = "visible";
        // we should remove + & - button & message also
        addMoreBtn.remove();
        removeBtn.remove();
        msg.remove();
    }
    count.innerText = value - 1;
}

// when we will click addMoreBtn, it will increase count
addMoreBtn.addEventListener("click", () => {
    updateCount();
})
removeBtn.addEventListener("click", () => {
    decCount();
})