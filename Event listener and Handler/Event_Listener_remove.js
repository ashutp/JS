//Removing Event Listeners
// If you add an event listener, especially one that fires often (like mousemove or scroll), it's good practice to clean it up when it's no longer needed to prevent memory leaks. You do this with .removeEventListener()


const ele2=document.getElementById("box");
function mouse_event(e){
    e.target.style.border="30px solid red";
}

ele2.addEventListener("dblclick",mouse_event);

ele2.removeEventListener(mouse_event);