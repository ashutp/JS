// arithmetic operators 
console.log("arithmetic operators");
let a = 10;
let b = 3;

console.log(a + b); //13
console.log(a - b); //7
console.log(a * b); //30
console.log(a / b); //3.33333333
console.log(a % b); //1

// increment/decrement operators
console.log("unary operator's increment /decrement");
let x = 5;

console.log(x++); //5
console.log(x); //6
console.log(++x); //7
console.log(x--); //7
console.log(x); //6

// comparison operator's
console.log("comparison operator's");
console.log(5 > 3);  //true
console.log(10 <= 10); //true
console.log(7 === "7"); //false
console.log(7 == "7"); //true
console.log(null == undefined); //true
console.log(null === undefined); //false

// special operator's
console.log("special operator's");
console.log(NaN === NaN); //false
console.log(0 === false); //false
console.log("" == false); //true
console.log("" === false); //false

// logical operator's
console.log("logical operator's");
let age = 20;
let hasID = true;

console.log(age >= 18 && hasID); // true
console.log(age < 18 || hasID);  //true
console.log(!hasID); //false 

// default value using ||
console.log("default value using ||");
let username = "";
let displayName = username || "Guest";

console.log(displayName);// Guest

// number conversion
console.log("Number conversion");
console.log(Number("100")); //100
console.log(Number("100px")); //NaN
console.log(parseInt("100px")); //100
console.log(parseFloat("3.14kg")); //3.14
console.log(+("50")); //50

// convert to bool 
console.log("convert to bool");
console.log(Boolean(0)); //false
console.log(Boolean("0")); //true
console.log(Boolean(""));//false
console.log(Boolean([]));//true
console.log(Boolean({}));//true

// floating point problem pricision issue
console.log("floating point precision issue");
console.log(0.1 + 0.2); // not 0.3  comes in output
console.log(0.1 + 0.2 === 0.3); //false answer reason pricison issue
console.log(0.3 - (0.2 + 0.1) < Number.EPSILON); // if it return true the answer will be true
//Number.EPSILON contain middle all number 0 to 1. and 0 was included.

// practice problem 
console.log("practice problems");
console.log([] == false); //true
// console.log([] === false);
console.log(null >= 0); //true
console.log(null > 0);//false
console.log(null == 0); //false




