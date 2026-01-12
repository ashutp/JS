//Using forin loop we can access key in a obj.
let user = {
    name: "Ashu",
    age: 34,
    Roll_no: "21",
    Phone_no: "1234567890"
}
//(Advanced Gotcha: for...in also iterates over properties from the object's prototype chain, which can be unexpected. For this reason, the modern methods below are usually preferred.)
for (const key in user) {

    console.log(`keys:${key},value:${user[key]}`);

}

//the modern Object methods
// Object.keys(obj): Returns an array of the object's own property keys.
// Object.values(obj): Returns an array of the object's own property values.
// Object.entries(obj): Returns an array of [key, value] pairs.

for (const element of Object.keys(user)) {
    console.log(element);
}
for (const element of Object.values(user)) {
    console.log(element);
}
for (const [key,value] of Object.entries(user)) {
    console.log(`key:${key} value:${value}`);
}

