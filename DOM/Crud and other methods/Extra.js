// The Solution: The DocumentFragment
// A DocumentFragment is a lightweight, in-memory DOM node that is not part of the main document tree. It's a temporary, invisible container.
// It has the same API as a regular element: you can .appendChild() or .append() to it.
// The key difference: Modifying a DocumentFragment is extremely cheap. Since it's not part of the visible page, changing it does not trigger any reflows or repaints.
// The Efficient "Good" Way:
// This code does all the heavy lifting "offline" and then updates the live DOM only once.

const list = document.getElementById('my-list');
// START THE TIMER
console.time("Loop WITH fragment");
// 1. Create the invisible "scratchpad".
const fragment = document.createDocumentFragment();
// 2. Do all your work on the scratchpad.
// This loop is now very fast because it's only changing things in memory,
// not on the visible page.
for (let i = 0; i < 1000; i++) {
 const newItem = document.createElement('li');
 newItem.textContent = `Item ${i + 1}`;
 // We append to the fragment, not the live list.
 fragment.appendChild(newItem);
}
// 3. Now, attach the entire finished result to the live DOM in ONE single operation.
list.appendChild(fragment); // This causes only ONE reflow and repaint!
// STOP THE TIMER
console.timeEnd("Loop WITH fragment");
