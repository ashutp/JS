// In Depth Guide to javascript Events.
// The Three Core Components
//To make a webpage interactive,you always need three things:
//1.The target element:Which HTML element are we waiting for an action on?
//2.The event type:what specific action are we lisitng for?
//3.The listener/handler:what code should be executed when that action happens?

//The Modern Way: addEventListener()
//this is the standard,most powerful,and recommended way to handle events.you call it on the target element.
// example:targetelement.addEventListener("Eventtype",functiontype);

const str1="I am Happy, I am clicked.";
const str2="I am wating for click.";

function clickMe(e){
    p.textContent="I am Happy, I am clicked.";
    p.style.color="white";
    parent.style.backgroundColor = "black";
}

// function clickMe2(e){
//     p.textContent="I am wating for click.";
//     p.style.color="black";
//     parent.style.backgroundColor = "grey";
// }

const btn=document.getElementById("btn");
const p=document.querySelector("p");
const parent=document.getElementById("box");
 btn.addEventListener("click",clickMe);

