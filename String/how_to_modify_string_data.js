console.log("\nstring is prmitive data type but when you use method and properties they wrap in string obj :");

console.log("propertes like .length ,[] and method like  function using with string");
let str="ashu";
console.log("\nhow to find length of the string :",str.length);
console.log("\nyou can also access data using bracket notation to access data in specific index: eg string ashu [0]=" ,str[0]);

console.log("\nwhen you modify string without using object methods you will fail silently :eg let str='ashu' and you modify his first index value like str[0]='p' the execuation fail silently: beacause the string is immutable datatype " );
// st[0]='p';
let str2= str.replace("a","p")
console.log("\n using method like :",str2);
let str3=str.toUpperCase();
console.log("\nUsing this toUppercase() method we can convert string data into uppercase string: ",str3);