
// The Classic,Specific Methods
//These were the original ways to select elements. They are very fast for their specific purpose but are less flexible than the modern methods.

//A. document.getElementById("id_name");

//what it does:Select the single element that has the specified id.

//Return :Asingle Element object,or null if no element with that ID is found.

// demo:
const ele=document.getElementById("id_name");
ele.style.color="white";
ele.textContent="Hello Ji";
ele.style.backgroundColor="black";
//Why it's great: It's extremely fast and direct because IDs are meant to be unique in a document. This is the best method to use when you have a unique ID.

//B:documentsByTagName("tagName");

//What it does:Selects all elements that have the specified tag name like p,li,div.

//Return a live Html collection (an array-like object) of all matching elements.

// practice: 
const allpara=document.getElementsByTagName('p');
for(let i=0;i<allpara.length;i++){
    allpara[i].style.color="yellow";
}

// What "live" means:if you add a new <p> to the page after you've selected them ,the all paragraphs collection will automatically update to include it


//C : document.getElementByClassName("class_name");
//what it does: Select all elements that have the specified class name.
//Returns:A live HTMLCollection of all matching elements.

const allItems=document.getElementsByClassName("item");

for (let index = 0; index < allItems.length; index++) {
  
  allItems.textContent="I am the best";  
}

//2.The modern,powerful methods(the Query selectors).

//A.document.querySelector("cssSelector");
//What it does:Selects the first element in the document that matches the specified Css selector.

//Return the single element object,or null if no matches is found.

// Practice:

// Get the element with the ID 'main-container'
const main = document.querySelector('#main-container');
// Get the FIRST element with the class 'container'
const firstContainer = document.querySelector('.container');
console.log(firstContainer); // This will be the main div, not the footer
// Get the FIRST paragraph
const firstP = document.querySelector('p');
console.log(firstP);
// Get the list item that has BOTH 'item' and 'special' classes
const specialItem = document.querySelector('.item.special');
specialItem.style.color = 'orange';
// Get the input with the name 'username'
const usernameInput = document.querySelector('input[name="username"]');

//B.document.querySelectorAll("cssSelector").
//What it does:Select all elements in the document that match the specified CSS selector.
//Return:A static NodeList (an arry-like object) of all matching elements.

// practice:
//// Get ALL elements with the class 'container'
const allContainers = document.querySelectorAll('.container');
console.log(allContainers.length); // 2
// Get ALL list items inside the element with the ID 'item-list'
const listItems = document.querySelectorAll('#item-list li');
// A NodeList has a .forEach method, which is very convenient!
listItems.forEach(item => {
 item.style.fontWeight = 'bold';
});


// What "static" means: Unlike an HTMLCollection, a NodeList returned by querySelectorAll is not live. If you add a new matching element to the page later, the listItems collection will not automatically update. This is usually the behavior you want, as it's more predictable.

// 3. Other, More Niche Selections
// document.getElementsByName('name'): Selects elements based on their name attribute (most commonly used for form elements).
const loginForm = document.getElementsByName('login-form');
const usernameInputByName = document.getElementsByName('username');


// Traversing the DOM: Once you have one element, you can navigate to its relatives.
const itemList = document.getElementById('item-list');
const parentContainer = itemList.parentElement; // The #main-container div
const listChildren = itemList.children; // An HTMLCollection of the 3 <li> elements
const firstLi = itemList.firstElementChild; // The first <li>
const lastLi = itemList.lastElementChild; // The last <li>
const specialLi = document.querySelector('.special');
const nextItem = specialLi.nextElementSibling; // The 3rd <li>
const prevItem = specialLi.previousElementSibling; // The 1st <li>
