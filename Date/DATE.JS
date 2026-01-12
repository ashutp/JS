
console.log("There are three way's to create date first is using date object eg: new Date(), 2nd method is create time stamp Date.now() using that timestamp for other date genration , 3rd is creating date using own intilization ");


console.log("\n1st method :Data obj is not a calender it is a masive number the number reperesent's the total milliseconds that have passed since a universal starting point the unix Epoch . which is midnight on january 1 1970 Universal time cordiante (UTC),every date you create is just a wrapper around this timestamp:");
let dates=new Date();
console.log("\n2nd method :WE can create date obj using the newDate() constructor if you provide no argument they can generate current date: ",dates);
let date2=Date.now();
console.log("\nUsing Date.new() they can create timestamp for you using this time stamp you can create a other dates:",date2);
let date3=new Date(date2);
console.log("\nUsing this timestamp you can create date :",date3);
let date4=new Date(2025,9,5,18,35,3);
console.log("\n3rd method intilize date with own using Date obj new date(year,month,day,hour,sec,millisec) ,",date4);

console.log("\nImportant info : month follow zero based indexing:");
console.log("3. Getting Information from a Date Object (Getters)");
const now = new Date(); // Let's pretend it's Sep 4, 2025, a Thursday

console.log(now.getFullYear()); // 2025 (The full 4-digit year)
console.log(now.getMonth());    // 8 (Remember, 0-indexed, so 8 is September)
console.log(now.getDate());     // 4 (The day of the month, 1-31)
console.log(now.getDay());      // 4 (The day of the week: 0=Sunday, 1=Monday, ..., 4=Thursday)
console.log(now.getHours());    // e.g., 6 (The hour, 0-23)
console.log(now.getMinutes());  // e.g., 20 (The minute, 0-59)
