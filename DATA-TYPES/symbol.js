console.log("the symbol is mainly used when we need to create a new value every time.");
// We use Symbol when we want a property that no other code can accidentally overwrite.

let a=Symbol("hi");
let b=Symbol("hi");

// the both a and b are not same value 
// the symbol can  create unique value every time as per given input 
console.log(a===b);
console.log(a==b);

