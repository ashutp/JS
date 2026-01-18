
// map is used to modify and do some process on original array 
// To create a new array by transforming every element from an original array.

//- **Key Characteristics:**
// - It **always** returns a **new array**.
// - The new array will **always** have the **same length** as the original array.
// - It is **non-mutating**; it does not change the original array.
const arr = [3, 6, 26, 2, 5];
let ans = arr.map((ele) => {
    return ele * 2;

});

console.log(ans);