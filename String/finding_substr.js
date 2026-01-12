console.log("threre are major three methods to find the substr in string 1 is: by .indexof(substr);,.lastindexof(substr), and includes(substr)");

let str="the quick brown fox jumps over the box;"
console.log("1st method: ",str.indexOf("ox")," if not presnt in string the method return -1");
console.log("1st method: ",str.lastIndexOf("ox")," if not presnt in string the method return -1");

console.log("\nlast method is how to find substr present in a string : if str present in a string they will return true and its not present in string they will return false :" ,str.includes("overee"));


