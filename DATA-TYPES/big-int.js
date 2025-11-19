console.log("BigInt is the main helper when you deal with big numbers that exceed the max integer limit.");


// using n in last you can define the big int 
// JavaScript numbers can only safely go up to 2^53 − 1.
// If your number is bigger than that, JavaScript starts giving wrong results.
// BigInt lets you store and work with numbers larger than this limit.
let a=123456677888899999999999n;
console.log(a);