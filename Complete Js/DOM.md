### Window Object
Before talking about DOM, let's take a look about 

### what is Window Object ?
When we open a tab in our Browser, our Browser create a 'Window object for us' for every page and inside Window object we have multiple function & object in it.

* It is created by Browser not Javascript
* `*alert*, *prompt*` etc are also object of *window object*

#### document is also a object of window object

# DOM => Document Object Model

DOM is basically the representation of the same HTML document but in a tree-like structure composed of objects. 
* We can access our HTML code in JS through DOM.
* AS javascript can not understand the tags like (`<h1> </h1>`, `<div></div>`) in HTML document but can understand *object h1* in DOM. Now, Javascript can access each of the objects (`h1, div, p `etc ) by using different functions.

## Why do we use DOM ?
 
 * One of the imporatnt reason is *`Dynamic Changes`*

 Now what is the meaning of Dynamic Changes?
 * let say we want to perform some changes in our webpages after clicking a button or submitting a form or anything ; we can do this through JS using DOM without touching HTML or CSS.

 * We can add `div` dynamically , can change our `style` of web page etc.

# 

`NOTE :` 
 when we use our `<script>` tag before `<body>` tag in HTML; in that *DOM* is not accessable in `window.document.body`, it will give NULL.

<details> 
    <summary style="font-size: 1.5rem; color : rgb(252, 164, 186)">How to access Element from DOM</summary>
</details>
<details> 
    <summary style="font-size: 1.5rem; color : rgb(252, 164, 186)">How to change Element in DOM</summary>
</details>
<details> 
    <summary style="font-size: 1.5rem; color : rgb(252, 164, 186)">How to Add new Element in DOM</summary>
</details>
<details> 
    <summary style="font-size: 1.5rem; color : rgb(252, 164, 186)">How to remove Element from DOM</summary>
</details>
