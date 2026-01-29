//The `event` Object: The Information Packet

// When an event occurs and your handler function is called, the browser automatically passes a special object as the first argument to your function. This is the `event` object.

const ele=document.getElementById("box");
ele.addEventListener("mouseleave",(event_object)=>{
    event_object.target.style.backgroundColor="grey";
 // A. event.target
// This property tells you the specific element that triggered the event. This is incredibly useful when you have one listener on a parent element watching for clicks on many children.

    console.log(event_object.target);
})



//B. `event.preventDefault()`
// This method stops the browser's default behavior** for an element.

// Classic Use Case: Form Submission
// By default, when you submit an HTML form, the browser tries to send the data to a server and **reloads the page**. We usually want to stop this in a modern web app.