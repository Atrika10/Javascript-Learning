# How to use API in JS ?
### 1> Call API using `fetch()` method
* The fetch() method is used to make a network request to a specified URL. It returns a Promise that resolves to the Response to that request.

### 2> Get a response from `fetch()`:
* The response obtained from fetch() may not be directly usable as data. It requires further processing, which we'll do in the next step.

### 3> Make the response readable using .json():

* The `json()` method is used to extract the data from the response. This method returns a Promise that resolves to the JavaScript object parsed from the JSON.

NOTE : ` JSON stands for JavaScript Object Notation`
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

## How to Access data from `JSON` ?
* when we send a `request` to API ; API send a `response` in JSON format which is in the form of `string`.
* we've *2 important `method`*  to work with JSON

    * `JSON.parse(data)`

        * To parse a string data into a JS object
        * Example :
        ```
        let jsonRes = '{"name" : "Atrika", "roll" : 2}';

        let validRes = JSON.parse(jsonRes);

        console.log(validRes.name);
        ```
    * `JSON.stringify(data)`

        * To parse a *JS object into JSON*.
        * This is *opposite* of `JSON.parse()`
        * We use this method when we create our API.
        * Example :
        ```
        let jsObj = {
            name : "Atrika",
            roll : 2
        }
        let jsonObj = JSON.stringify(jsObj);
        console.log(jsonObj);

        // '{"name":"Atrika","roll":2}'
        ```

* NOTE : parse means to convert one format to another format.