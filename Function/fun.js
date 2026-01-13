
// What is function?
//Function is a piece of a code ,it is used to make a reusable set of instruction.you can use this set of instruction useing function again and again.

//the core part of the function.
//Decleration.
//calling.
//parameter.
//Note:if a function has no return value /return statement the return a undefiend automatically.

//Ways to create a function.
// Classic way to create function in js 
//Key Feature: Hoisting. Function declarations are "hoisted," meaning the JavaScript engine "lifts" them to the top of their scope before the code is executed. This means you can call a function before you define it in the code.

function add(num,num2){
    return num+num2;
}
console.log(add(2,3));

//Function Expression
// Key Feature: Not Hoisted. A function expression is not hoisted. It behaves just like a variable. You cannot call it before it is defined.
const subtract=function(a,b){
    return a-b;
};
console.log(subtract(3,1));
//Note:Important Arrow function 
const multiplyArrow = (a, b) => {
 return a * b;
}

console.log(multiplyArrow(3,5));

// Implicit Return: If the function body is just a single expression, you can remove the curly braces {} and the return keyword.
const multiplyShort = (a, b) => a * b; // The result of a * b is automatically returned.
console.log(multiplyShort(5,8));
// ​
// Single Parameter: If there is only one parameter, you can remove the parentheses ().
const square = x => x * x;
console.log(square(6));

//if you return obj using arrow function you can use this syntax.
const obj=()=>({name :"Ashu",Age:34});
console.log(obj());

//Default Parameters (ES6)
// You can provide a default value for a parameter in case it's not passed in (i.e., it's undefined).
function give(name="Alen"){
    console.log(`give to ${name}`);
}
give();//if you not pass an argument to the function the result will be default.
give("mark");//if you pass the argument the result will be as you expect;

