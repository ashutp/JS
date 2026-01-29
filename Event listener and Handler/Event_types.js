
// Event Types
// JavaScript supports a variety of event types. Common categories include:

// Mouse Events: click, dblclick, mousemove, mouseover, mouseout
// Keyboard Events: keydown, keypress, keyup
// Form Events: submit, change, focus, blur
// Window Events: load, resize, scroll

//1.Mouse Events
// Mouse Events
// element.addEventListener('click', (e) => console.log('Clicked'));
// element.addEventListener('dblclick', (e) => console.log('Double clicked'));
// element.addEventListener('mousedown', (e) => console.log('Mouse down'));
// element.addEventListener('mouseup', (e) => console.log('Mouse up'));
// element.addEventListener('mousemove', (e) => console.log('Mouse moving'));
// element.addEventListener('mouseenter', (e) => console.log('Mouse entered'));
// element.addEventListener('mouseleave', (e) => console.log('Mouse left'));

//example:
const par=document.getElementById("box");
par.addEventListener("mouseenter",(e)=>{
    e.target.style.backgroundColor="black";
    e.target.children[0].style.color="white";
});

//2.Keyboard Event
// Keyboard Events
document.addEventListener('keydown', (e) => {
console.log('Key pressed:', e.key);
console.log('Key code:', e.code);
console.log('Ctrl pressed:', e.ctrlKey);
console.log('Shift pressed:', e.shiftKey);
console.log('Alt pressed:', e.altKey);
});

// Form Events
const input = document.querySelector('input');
const form = document.querySelector('form');

input.addEventListener('focus', () => console.log('Input focused'));
input.addEventListener('blur', () => console.log('Input blurred'));
input.addEventListener('input', (e) => console.log('Input value:', e.target.value));
input.addEventListener('change', (e) => console.log('Changed:', e.target.value));

form.addEventListener('submit', (e) => {
e.preventDefault(); // Prevent form submission
form.reset();
console.log('Form submitted');
});

// Window Events

window.addEventListener('load', () => console.log('Page fully loaded'));
window.addEventListener('DOMContentLoaded', () => console.log('DOM ready'));
window.addEventListener('resize', () => console.log('Window resized'));
window.addEventListener('scroll', () => console.log('Page scrolled'));