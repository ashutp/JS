
// Method:find();
//  but it stops and returns the very first element that matches the condition. If nothing matches, it returns undefined.

const arr = [3, 5, 6, 7,"ashu"];
console.log(arr.find(ele => ele === "ashu"));

//.some(): Checks if at least one element in the array passes the test. Returns true or false. It stops as soon as it finds one.
console.log(arr.some(ele => ele === 7));

// .every(): Checks if all elements in the array pass the test. Returns true or false. It stops as soon as it finds one that doesn't pass.
const arr2=[34,5,6,7];
console.log(arr2.every(ele=>ele<50));