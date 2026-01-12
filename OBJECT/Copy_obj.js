
//How to copy an object to another object.

//  Shallow Copy 
// A shallow copy creates a new top-level object, but if any of the properties of the original object are themselves objects, it only copies the references to those nested objects.

// Modern way to create Shallow copy 
// Using ...(spread operator )/Object.assign

const user1 = {
    name: "Ashu",
    age: 30,
    address: { city: "New york" },

}
const user2 = { ...user1};
//if you change the address value using user2. the changes reflect on user1 also.beacuse they can only copy upper layer of an object called as property,if they see any other object type structure .they can copy the structure by referance not copy by value.
user2.address.city = "London";
console.log(`user:${user1.address.city} user2:${user2.address.city}`);
// Why did the original change? Because both user1 and user2 contain a reference to the exact same address object.
user2.name="himanshu";


// To create Deepcopy you can use structuredClone() method they can create a deepcopy an a object
// The structuredClone() global function was introduced to solve this exact problem. It is designed to create a deep copy of a given value using the "structured clone algorithm," which is the same powerful algorithm that browsers use internally to copy data for features like postMessage (sending data between windows).

// It recursively traverses the entire object, creating brand new copies of every object and array it finds, resulting in a completely independent clone.

// Limitations of structuredClone()
// While it is extremely powerful, the structured clone algorithm is not a magical "clone everything" button. It is designed to clone data, not code or system resources.
// It CANNOT clone:
// Functions: It will throw a DataCloneError. Functions have a "scope" and are not considered simple data.
// DOM Nodes: It will throw an error. You can't clone a piece of a webpage this way.
// Class Instances (Prototypes): It will discard the object's prototype chain. The clone will be a plain object with all the same data properties, but it will no longer be an "instance of" your custom class.
// // Error objects.

// some methods 
// structuredClone()
// The default choice for deep cloning data in modern JS.
// Built-in, fast, and handles most data types (including Date, Map, Set).
// Cannot clone functions or class prototypes.

// JSON.parse(JSON.stringify())
// Quick and simple deep cloning of JSON-safe data only.
// No dependencies needed.
// Silent data loss (functions, undefined are lost). Slower than structuredClone.


// Library (e.g., _.cloneDeep)
// Maximum robustness. When you need to clone complex objects with functions, class instances, or in older environments

const user3=structuredClone(user1);
console.log(user3);
