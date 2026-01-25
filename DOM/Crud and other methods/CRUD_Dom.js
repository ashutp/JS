//CRUD ON DOM
//A.Creating a new Element:
//document.createElement();
//This creats a new element node in memory.it is not yet on the page.

const eleCreation=document.createElement("h1");
eleCreation.textContent="I am a new creation using createElement.";
eleCreation.style.backgroundColor="grey";
document.body.append(eleCreation);


//1.Adding Inside a Parent (as a Child).
//these methods place the new element inside the boundaries of another element.

//.appemd(...nodes)
// Equivalent to:
const texts = document.createElement("h1");texts.textContent = "I am New element  added by append method.";
document.body.append(texts); 
// What it does: Inserts the node as the very last child of the parent.'

// Use Case: The default way to add an item to the end of a list or container.

// .prepend(...nodes).
//What it does:insert the node as the very first child of the parent.
//Use Case: Adding a new item to the top of a feed or a list.

const texts2=document.createElement("h1");
texts2.textContent="I am a new element added using by prepend.";
document.body.prepend(texts2);


//2.Adding next to an Element(as a sibling)
//these methods place the new element outside the boundaries of the reference element,at the same level.


//.before(...nodes)
//what it does:insert the node immediately before the refernce element,as its previous sibling.

//Use Case: Adding a new element directly preceding another one.
const text4=document.createElement("h1");
text4.textContent="i am a new element using .before() , insert before referance element";
text4.style.backgroundColor="red";

const refele=document.getElementById("solo_image");
refele.before(text4);

//.after()
//what it does:insert the node immediatly after the reference element,as its next sibling.

// Use Case: Adding a new element directly following another one.

const text3=document.createElement("h1");
text3.textContent="i am a new element using .after() , insert after referance element.";
text3.style.backgroundColor="red";
refele.after(text3);


//C Removeing an Element
//.remove(): The simplest and most modern way.You call it directly.

const demoelement=document.createElement("h1");
demoelement.style.backgroundColor="grey";
let count=0;
const intervalid=setInterval(() => {
    demoelement.textContent=    `I am a demo element. My creation purpose was to understand the work of remove() method. 
        Time was set for 10 seconds. When the 10 seconds are complete, I will be removed from the DOM: ${count}`;
    count++;
}, 1000);

setTimeout(() => {
    demoelement.remove();
    clearInterval(intervalid);
}, 10000);
document.body.append(demoelement);