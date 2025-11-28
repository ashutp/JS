console.log("There are two types of Type Conversion:");
console.log("1. Implicit Type Conversion");
console.log("2. Explicit Type Conversion");

// Implicit means the interpreter automatically converts the type at run time. they called as type coricion

// Example:
console.log("Example of Implicit:");
console.log('"2" == 2  // returns true, because JavaScript converts string to number automatically'); t

// Explicit type conversion happens manually by the user/developer. they called as type conversion.// Example:
console.log("Example of Explicit:");
console.log('String(2)  // returns "2"');
console.log('"2" === String(2)  // both are string and equal');

// the type conversion in js : the interperater se both value if both value are equal in data type there are no problem in comparsion.but if the value are in another type the interpreter can give same base to avoid problem.

// When we apply loose comparison (==) to compare different data types,
// type coercion happens. The interpreter converts values to a common type
// before comparing.

// But when we use strict comparison (===), JavaScript checks both value and data type.
// No type coercion happens here, which helps avoid automatic type conversion.

console.log(Number(""));          // 0
console.log(Number(false));       // 0
console.log(Number(true));        // 1
console.log(Number(null));        // 0
console.log(Number(undefined));   // NaN
console.log(Number("abc"));       // NaN
console.log(Number([]));          // 0
console.log(Number([5]));         // 5
console.log(Number({}));          // NaN

console.log(String(123));         // "123"
console.log(String(false));       // "false"
console.log(String(null));        // "null"
console.log(String([]));          // ""
console.log(String({}));          // "[object Object]"

console.log(Boolean(""));         // false
console.log(Boolean("hi"));       // true
console.log(Boolean(0));          // false
console.log(Boolean(null));       // false
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true


// there are six falsey value present in js 
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false
