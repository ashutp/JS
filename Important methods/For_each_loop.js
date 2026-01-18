
//for_rach loop is used to access each element of the array,container to do some work on the data.
//To execute a function once for each element in the array. It's a modern alternative to a for loop.
// - **Key Characteristics:**
// - It does **not** return anything (it returns `undefined`).
// - It does **not** create a new array.
// - You **cannot** `break` out of it or `continue` to the next iteration.

const arr = [1, 5, 6, 36, 3];

arr.forEach((element, index, arr) => {
    console.log("element ", element, " index: ", index, " arr :", arr);
});