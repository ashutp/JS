//First slected the element and stored it in a variable,you have a powerful object that gives you full contro over that part of your webpage.let's cover the three categories of manipulation.

//1.Editing what's inside (content & Html).
//2.Editiong the tag itself (Attributes,class,and styles).
//3.Editing the page structure (Creating,Adding and Removing Elements).

//Part 1:Editing the content inside an Element

const root=document.getElementById("root");
//Using .textContent().
//What its does set pure text content of an element.it ignores and strips out all html tags.
//use case: this should be your default choice for changing text on the page.

const text="<h1>I am the best<h1>";
root.textContent=text;
root.style.backgroundColor="BLACK";
root.style.color="white";
//The Security Benifit:When you set .textContent, the browser treats your string as plain text. this is safe because it prevents malicious code from being executed.


//B. innerHTML(it is powerfil but dangerous).
//what it does:Gets and Sets the full Html markup inside an element.
//Use Case: Use this only then you need to generate Html and the content is from a trusted source(i.e.. you ,the developer).

const root2=document.getElementById("root2");

const text2="<h1>I am a best developer.<h1>";
root2.innerHTML=text2;
root2.style.backgroundColor="grey";
//The Security Risk (XSS-Cross-Site-Scripting):Neve use .innerHTML with content provided by a user (like comment or a username).if a user enter malicipus <script> code,innerHTML will execute it ,allowing the user to attack your website and its vasitors.


