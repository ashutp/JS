
//Rest Parameters (...) (ES6)
// This allows a function to accept an indefinite number of arguments and gather them into a true array.

function rest(...num){
    console.log(num);
}
rest(1,23,4,45,5,5);

// The Key Difference
// Spread = Unpack/Expand (takes one thing and breaks it apart)
//  Rest = Pack/Collect (takes many things and combines them into one)

const [first,sec,...arr]=[1,2,34,5,6];//use of rest;
console.log(first);
console.log(sec);
console.log(arr);

const arr2=[1,5,6,8,2];
const combined=[...arr,...arr2];// use of spread
console.log(combined);

// RIGHT side of assignment = SPREAD (expanding)
// const copy = [...original]; // Spreading original

// ​
// LEFT side of assignment = REST (collecting)
// const [first, ...rest] = array; // Collecting rest

// ​
// Function call = SPREAD (unpacking arguments)
// myFunction(...array); // Spreading array into arguments

// ​
// Function definition = REST (collecting parameters)
// function myFunction(...params) { } // Collecting params

// ​
