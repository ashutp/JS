// In Depth Guide to javascript Events.
// The Three Core Components
//To make a webpage interactive,you always need three things:
//1.The target element:Which HTML element are we waiting for an action on?
//2.The event type:what specific action are we lisitng for?
//3.The listener/handler:what code should be executed when that action happens?

//The Modern Way: addEventListener()
//this is the standard,most powerful,and recommended way to handle events.you call it on the target element.
// example:targetelement.addEventListener("Eventtype",functiontype);


function clickMe(e){
    p.textContent="I am Happy, I am clicked.";
    p.style.color="white";
    parent.style.backgroundColor = "black";
}




const btn=document.getElementById("btn");
const p=document.querySelector("p");
const parent=document.getElementById("box");
// Critical Point: We pass the function name onButtonClick directly. We do not call it with (). We are giving addEventListener a reference to our function—the "recipe"—to be used later.
 btn.addEventListener("click",clickMe);

