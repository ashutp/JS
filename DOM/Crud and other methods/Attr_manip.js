//Editing the Element's tag itself
//This is about changing the attributes of the tag,like its id,class,or style.

//A.Changing Common Attributes (Direct Properties).
//For standard attributes,you can often change them directly as properties on the element object.

const img_div=document.getElementById("img_div");
const img=document.createElement("img");
img.src="./image.png";
img.alt="image";
img.id="solo_image";
img.style.height="100px";
img.style.width="200px";

img_div.append(img);

//B.Changing Css classes (The .classList toolbox)
//This is the best and safest way to manage an element's classes.forget about .className.

//.add('className'):Adds a new class.
//.romove('className'):Remove a class.
//.toogle("className"):Add the class if it's mising,removes it if it's there.
//.contains('className):checks if an element has a class(return true or false).

img.classList.add("img");

const imageClassDemo=document.getElementsByClassName("img");
imageClassDemo[0].style.border="12px solid black";

// Best Practice: Define your styles in a CSS file and use JavaScript's .classList to apply or remove those styles. This keeps your presentation (CSS) and logic (JS) separate.

//C.changing inline style (the .style property).
//this allows you to directly apply Css styles to an element's style attributes.
//CRITICAL RULE: CSS properties with a hyphen are converted to camelCase.
// background-color becomes backgroundColor.
// font-size becomes fontSize.

// Use Case: Best for dynamic styles that are calculated at runtime (e.g., setting an element's position based on the mouse). For static styles, prefer using .classList.

