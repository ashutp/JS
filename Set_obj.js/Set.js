// A set is the collection of uniue element.
// A Set is a list that enforces uniqueness. It's a collection of items where duplicates are impossible.

const arr=new Set([11,11,2,34,56,56,78]);

console.log(arr);

// **Core Methods (CRUD)**

// - **`.add(value)`:** Adds a new element. If the element already exists, it does nothing. It returns the `Set` object, so you can chain `.add()` calls.
// - **`.has(value)`:** Checks if an element exists. Returns `true` or `false`.
// - **`.delete(value)`:** Removes a specific element.
// - **`.clear()`:** Removes all elements from the `Set`.

arr.add(4);
console.log(arr);
console.log(arr.has(4));
console.log(arr.delete(4));
arr.clear();
console.log(arr);