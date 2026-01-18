
//**The `Map` Object**

// **First Thought: A `Map` is like an object, but its keys can be *anything* (not just strings).**

// This is the most critical difference. In a standard object `{}`, keys are automatically converted to strings. A `Map` preserves the key's type, allowing you to use objects, functions, or any other data type as a key.
// first method to create map obj
const mymap=new Map();
mymap.set("ashu",1);
console.log(mymap);



//Second method
// Create a Map with initial values 
const userMap = new Map([
  ["name", "Alice"],
  [true, "is verified"],
  [100, "points"]
]);

// crud operation on Map object 

// set(): using set method you can add and upadte a key value pair.
userMap.set(4,5);
// get(): retrivers the value of the given key .if the key not present in the Map obj the return undefiend
console.log(userMap.get(4));
//has():  Checks if a key exists. Returns true or false.
console.log(userMap.has(5));
//delete() :Removes a key-value pair from Map obj.
userMap.delete(4);
console.log(userMap);
//clear() :Remove all key value pairs fro m the Map obj.
userMap.clear();
console.log(userMap);
