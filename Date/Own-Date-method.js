// Create a function that formats a date as "Today is [Day], [Month] [Date], [Year]"
function formatDateNice(obj) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"];
    
   const ans=`${days[obj.getDay()]}-${month[obj.getMonth()]}-${obj.getDate()}-${obj.getFullYear()}`;

   return ans;
}

console.log(formatDateNice(new Date()));

// Create a function that calculates days until Christmas
function daysUntilChristmas() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const christmas = new Date(currentYear, 11, 25); // December 25
    
    // If Christmas has passed this year, use next year
    if (today > christmas) {
        christmas.setFullYear(currentYear + 1);
    }
    
    // Calculate difference in days
    const diffInMs = christmas - today;
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    
    return `There are ${diffInDays} days until Christmas!`;
}

console.log(daysUntilChristmas());