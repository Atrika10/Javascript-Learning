# How to use API in JS ?
### 1> Call API using `fetch()` method
* The fetch() method is used to make a network request to a specified URL. It returns a Promise that resolves to the Response to that request.

### 2> Get a response from `fetch()`:
* The response obtained from fetch() may not be directly usable as data. It requires further processing, which we'll do in the next step.

### Make the response readable using .json():

* The `json()` method is used to extract the JSON data from the response. This method returns a Promise that resolves to the JavaScript object parsed from the JSON.