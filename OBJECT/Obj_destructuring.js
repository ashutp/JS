
// Destructuring is a powerful syntax for "unpacking" values from arrays or properties from objects into distinct variables. It makes your code much cleaner and more readable.

const user = {
    id: 123,
    names: "Ashu",
    email: "Ashu@gmail.com",
    profile: {
        isadmin: true
    }
}

const { names, id } = user;
console.log(`name: ${names} id: ${id}`);

// Array destructuring 
const [first, sec] = [1, 2, 3, 4, 5];
console.log(first, " ", sec);

const val=Symbol("ashu");
console.log(val);
