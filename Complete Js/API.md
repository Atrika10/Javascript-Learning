# How to use API in JS ?
### 1> Call API using `fetch()` method
* The fetch() method is used to make a network request to a specified URL. It returns a Promise that resolves to the Response to that request.

### 2> Get a response from `fetch()`:
* The response obtained from fetch() may not be directly usable as data. It requires further processing, which we'll do in the next step.

### Make the response readable using .json():

* The `json()` method is used to extract the` JSON (JavaScript Object Notation)` data from the response. This method returns a Promise that resolves to the JavaScript object parsed from the JSON.

## Example :

```

let url = "https://cat-fact.herokuapp.com/facts";


const getFacts = async ()=>{
   
    // step 1 : fetching data, we'll get a response 
    let res = await fetch(url); // get request

    // step 2 : We've to convert this in JS object to JSON format
    // as json() method is also a async function, we have to await it

    let data = await res.json();
    // Now we can use data
    console.log(data);
    node.innerText = data[idx].text;

}

```