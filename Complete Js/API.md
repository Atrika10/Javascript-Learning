# How to use API in JS ?
### 1> Call API using `fetch()` method
* The fetch() method is used to make a network request to a specified URL. It returns a Promise that resolves to the Response to that request.

### 2> Get a response from `fetch()`:
* The response obtained from fetch() may not be directly usable as data. It requires further processing, which we'll do in the next step.

### 3> Make the response readable using .json():

* The `json()` method is used to extract the data from the response. This method returns a Promise that resolves to the JavaScript object parsed from the JSON.

NOTE : ` JSON stands for JavaScript Object Notation`
* `Json` : JSON is not a part of Javascript, it's just a format. JSON is kind of similar type of JS object both have key value pair but both are not same, they have some differences as well. Example : In JSON Key should be in string format but in JS object it is not. In JSON, there is nothing like `undefined` but in JS object we've a proper meaning of undefined.
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

#
## <p style = "color : pink"> AJAX => Asynchronous Javascript and XML </p>
Initially, when we call our API we used to get response in `XML (Extensible Markup Language)` format ; & this process happen asynchrnously that is why it is called AJAX. Although now we got our data in `JSON` format.

* AJAX is basically entire process through which we perform our API call and in response we got some data ; this entire process happen asynchronously.
* When we send a call to API it's known as `AJAX calls` . Ajax calls allow a website to update part of its content upon a user action without the need to reload the page.

*Note :*

Read data from a web server - after a web page has loaded

Update a web page without reloading the page

Send data to a web server - in the background