// | Feature           | var                     | let                           | const                         |
// |------------------|-------------------------|-------------------------------|-------------------------------|
// | Scope            | Function Scope          | Block Scope                   | Block Scope                   |
// | Reassignable     | Yes                     | Yes                           | No                            |
// | Redeclarable     | Yes                     | No                            | No                            |
// | Hoisted Value    | undefined               | Uninitialized (TDZ)           | Uninitialized (TDZ)           |
// | Global Object    | Attaches to window      | Does not attach               | Does not attach               |
// | Modern Practice  | Avoid                   | Use for reassignable values   | Use as default                |



console.log("first we know about what is variable, variable is like a container that can hold some value. example when you initialize variable let a = 10. this is number type variable. in simple language they can vary according to type of data.\n");

console.log("When you declare a variable you can use some keywords: There are three types of keyword we use (let, const, var) they have their own meaning and features and validations also.\n");

console.log("When you initialize variable using var: they have some drawbacks like: they are redeclarable and they do not follow block level restriction. they have some hoisting problem, they can be used before declaration and the interpreter not give any error because when you declare variable using var by default they initialize with undefined. that is the reason they work before declaration.\n");

console.log("Using let when you declare a variable they by default initialize as uninitialized (not undefined). they follow all types of scope rule not like var. they are reassignable also like a normal variable. in simple words they follow all rules.\n");

console.log("when you declare variable using const they are same as let but little difference is that you can't reassign the value once you declare. they can't change because they hold reference of object and value. they are not changeable meaning you can't change reference but change in value of an object is allowed.\n");


const obj={
    name:"ashu"
};
let gmail="ashukaithal09@gmail.com";
var age=21;
console.log(obj.name,age,gmail);
