
// .reduce()` - The Accumulator / The Snowball**

// - **First Thought:** "I want to roll up this entire list into a **single final value**." (e.g., Summing a list of numbers, counting items, etc.)
// - **Core Purpose:** To execute a "reducer" function on each element of the array, resulting in a single output value.
// - **Key Characteristics:**
//     - It is the most powerful and flexible of the iteration methods.
//     - It can return **any type of value**: a number, a string, an object, another array.
//     - It is **non-mutating**.
// - **Syntax:**`const finalValue = array.reduce((accumulator, currentValue, index) => { /* ... */ return newAccumulator; }, initialValue);`
//     - `accumulator`: The value that is "accumulated" or carried over from the previous iteration. It's the snowball.

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Book", category: "Books", price: 30, inStock: true },
  { id: 3, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true }
];


const totalStockValue=products.reduce((total ,product)=>{
     console.log(`Current Total: ${total}, Current Product: ${product.name}, Price: ${product.price}`);

  if (product.inStock) {
    // The return value of this step becomes the 'total' for the NEXT step.
    return total + product.price;
  }
  // If not in stock, just return the current total without adding anything.
  return total;
},0)


console.log(`\\nFinal Total Stock Value: $${totalStockValue}`);
