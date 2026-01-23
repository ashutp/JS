
//Properties for manipulating Attributes.
//These properties give you direct access to the HTML attributes of an element

//A. .id and .className

// .id: Gets or sets the id attribute.
const card = document.getElementById('product-card');
console.log(card.id); // "product-card"
card.id = 'new-card-id'; // Changes the element's ID


// .className: Gets or sets the entire class attribute as a single string.

// This will OVERWRITE all existing classes.
card.className = "card-dark-mode";
// The element now only has the class "card-dark-mode". "featured" is gone.


//B. .classList (The Modern Way to Handle Classes)

//What it is: An object with helpful methods to manage an element's classes.
// .add('className'): Adds a new class.
// .remove('className'): Removes a class.
// .toggle('className'): Adds the class if it's missing, removes it if it's present.
// .contains('className'): Returns true or false if the element has the class.

const card=document.getElementById("id");
card.classList.add("incart");
card.classList.toggle("incart");
card.classList.remove("incart");
if(card.classList.contains("incart")){
    console.log("this item is in the cart");
};


//C. .getAttribute() and .setAttribute() (For Any Attribute)
// These are generic methods that can work with any HTML attribute, including custom ones.
// Add a custom data attribute
card.setAttribute('data-product-id', 'xyz-123');
// Get the value of an attribute
const productId = card.getAttribute('data-product-id');
console.log(productId); // "xyz-123"
// Remove an attribute
card.removeAttribute('class');

//3. The .style Property
// First Thought: "Give me direct control over the element's inline styles."
// What it does: An object that represents the style="..." attribute of an element. You can change CSS properties through it.
// The "Gotcha": Property Names are camelCased. CSS properties with hyphens (like background-color) must be written in camelCase in JavaScript.
// background-color -> backgroundColor
// font-size -> fontSize
// z-index -zIndex


const title = document.querySelector('.title');
title.style.color = 'blue';
title.style.backgroundColor = '#f0f0f0'; // Note the camelCase
title.style.fontSize = '24px'; // The value must be a string
title.style.padding = '10px';




// Important: The .style property only knows about inline styles. It cannot read styles that are set in an external CSS file. To do that, you need to use the global function 
window.getComputedStyle(element);

// Best Practice: It's generally better to use .classList to add or remove CSS classes that are defined in your stylesheet, rather than manipulating inline styles directly with JavaScript. This keeps your styling rules separate from your logic.