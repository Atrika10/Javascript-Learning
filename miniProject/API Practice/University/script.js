console.log("okay");
let url = "http://universities.hipolabs.com/search?name=";

let searchBtn = document.getElementById("search");
let lists = document.getElementById("lists");

// function to fetch data
const getData = async (country) => {
    try {
        let res = await fetch(url + country);
        let jsonData = await res.json();
        return jsonData;
    } catch (e) {
        console.log("error => ", e)
    }
}

// call getData function after clicking the search button
searchBtn.addEventListener("click", async () => {
    let inpValue = document.getElementById("inpBox");
    let country = inpValue.value;
    lists.innerText = "";                            // before adding data inside unorderlist, we should remove prev data
    // call getData function
    let data = await getData(country);     // got list of data

    // we have to show college name as a list in DOM
    for (const list of data) {
        let li = document.createElement("li");   // create element
        li.innerText = list.name;               // add data in it
        lists.append(li);                      // append in desire place
    }   

});
