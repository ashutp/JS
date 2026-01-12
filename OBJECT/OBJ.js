// what is Object?
// object is a datastructure they can hold the value in the form of key value pairs .in js you can hold deferent type of data . 

let person={
    name:"Alice",
    age:32,
    isStudent:true
}
console.log(person);

// CRUD OPERATION 
// Creation of obj .
//{} using this iteral you can create a obj. 
const car={name:"Audi"}// an a empty obj.

// Read 
// You can read data using (Dot). and (Bracket Notation)[].
console.log(car.name);
console.log(car["name"]);

// Updating and Adding 
//You use the same syntax for both. If the property exists, it's updated. If it doesn't, it's created.
//  Adding value 
car.model="A4";
// updating value.
car.model='A6';

// DELET 
delete car.model;

// Object with method 
// When a function is a value inside an object,its called a method gives objectss behaviour.

// this keyword 
//this is a shortcut that means this object right here.
//inside the method ,the this keyword refers to the object that the method was called on.
const user={
    name:'Ashu',
    greeting:function(){
        console.log("Hello, my name is",this.name);
    }
}
user.greeting();