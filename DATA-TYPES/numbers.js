console.log("Here we see how can we play with number : Imp note is that number can includes all floating values also . in other language like c++ we see floating value can declare using flaot data type ,in js the flaoting values also includes in number.\n");

console.log("we can create number using normal method and using a new keyword also\n");

// normal method 
let a=10;
// this was not a good method confusing and slow then normal method create unnecessory object memory. 
let b=new Number(10);

// this are some methods we can use to deal with numbers 
// JS internally converts x into a temporary Number object
// Calls the method
// Then deletes the temporary object
console.log(a.valueOf());
a=12.444;
console.log(a.toFixed(1));

// there are three special number 
//1. is 
console.log(Infinity,-Infinity);
 



