
// ### **`.filter()` - The Sieve / The Bouncer**

// - **First Thought:** "I have a big list of items. I want to run each one through a test and create a **new, shorter list** containing only the items that pass the test."
// - **Core Purpose:** To create a **new array** containing only the elements from the original array that meet a specific condition.
// - **Key Characteristics:**
//     - It **always** returns a **new array**.
//     - The new array can have the **same length or be shorter** than the original. It will never be longer.
//     - It is **non-mutating**.

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Book", category: "Books", price: 30, inStock: true },
    { id: 3, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
    { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true }
];

const ans = products.filter((product) => {
return   product.price>50;
});
console.log(ans);