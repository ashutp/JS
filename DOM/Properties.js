//Properties for Manipulating Content
//These three properties are used to read or change the content inside an element, but they have critical differance.

//A. .textContent (The Safer and Recommended Choice)

//What it does: it gets or sets the raw text content of an element and all its discendents. it completely ignores all HTML tags and gives you just the text.

//When Writing (Safe): When you set .textContent, the browser treats your input as pure text. It will not parse any HTML tags. This is a crucial security feature that prevents Cross-Site Scripting (XSS) attacks.

//Practice:
const desc = document.getElementById('description');
// Let's try to inject some HTML
desc.textContent = "Click <a href='#'>here</a> to win!";
// The browser will display the literal text, not a clickable link:
// "Click <a href='#'>here</a> to win!"



//B. .innerHTML (The Powerful but Dangerous Choice)
// First Thought: "Give me everything inside, including all the HTML markup."
// What it does: It gets or sets the full HTML content of an element.


const desc = document.getElementById('description');
console.log(desc.innerHTML);
// Output: "These headphones have <strong>noise-cancelling</strong> features."
// It includes the HTML tags as a string.

//B .innerHTML

// When you set .innerHTML, the browser will parse your string and create actual HTML elements from it. This is powerful, but it's a major security risk if the string comes from a user.
const desc = document.getElementById('description');
// This is powerful and useful for creating new elements.
desc.innerHTML = "Updated features: <strong>Active Noise Cancelling</strong> and <em>Bluetooth 5.0</em>.";
// The browser will correctly render the bold and italic text.
// SECURITY RISK: What if the string comes from a malicious user?
let userInput = `<img src="x" onerror="alert('You have been hacked!')">`;
// desc.innerHTML = userInput; // This would execute the malicious script!



//C. .innerText (The "Smart" but Tricky Choice)
// First Thought: "Give me the text as it appears on the screen."
// What it does: This is a non-standard but widely supported property. It tries to get the text content as it is rendered to the user, taking CSS into account.

const productName = document.getElementById('product-name');
console.log(productName.innerText);
// Output: "SMART HEADPHONES" (if CSS `text-transform: uppercase` was applied)
// It will NOT include the text from the hidden <span> ("SALE").
