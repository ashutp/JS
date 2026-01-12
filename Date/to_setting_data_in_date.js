console.log(`4. Changing a Date: Setters and Mutability
Date objects are mutable, meaning you can change their value in place using "setter" methods.
`);
const da = new Date(1759262295036); // Creates a specific date
console.log("Before:", da);

// Let's change the month to May (index 4)
da.setMonth(4);

console.log("After:", da); // The ORIGINAL 'da' object has been changed.

const date = new Date(2025, 9, 1);
date.setMonth(9); // Oops! Date is modified
console.log(date.toDateString());