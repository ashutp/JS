
console.log(typeof (10 / 2)); //number
console.log(typeof (10 / "2"));//number
console.log(typeof NaN);//number

console.log(0.1 + 0.2 === 0.3);// they return false because here floating precision problem occur.

console.log(isNaN("123")); //false
console.log(Number.isNaN("123")); // false

console.log(Math.floor(Math.random() * 5)); // 0 t0 4 number was coming randomly.

console.log(Math.ceil(4.01)); //5
console.log(Math.trunc(-4.9));//-4
console.log((1.005).toFixed(2));//1.00
console.log(Number.isInteger(3.0));//true
console.log(Number.isFinite("10"));//false

// function of checking number issafe integer or not 
const num = 10;
function isSafe(num) {
    // return true if num is a safe integer
    if (!Number.isInteger(num)) {
        return false;
    }

    if (Number.MAX_SAFE_INTEGER >= num && Number.MIN_SAFE_INTEGER <= num) {
        return 1;
    } else {
        return 0;
    }
}
console.log(isSafe(num));

// in js how to check flaoting point number is equal to another floating point number 
let a = 1.0, b = 1.0;
function areEqual(a, b) {
    // compare using Number.EPSILON
    if (a === b) {
        return 1;
    }
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return 0;
    } else if (Math.abs(a - b) < Number.EPSILON) {
        return 1;
    }

    return 0;
}

// custom rounding function 
let rnum = 1.8;
let rnum2 = 1.4;
function myround(num) {
    if (num === 0) {
        return 0;
    }
    let demo = Math.trunc(num);
    if (num - demo >= 0.5) {
        return Math.ceil(num);
    } else {
        return Math.floor(num);
    }
}

console.log(myround(rnum2));

// my random genetate function between 1 to 50 
let max = 50;
let min = 1;
function randomegen(max, min) {

    return (Math.floor(Math.random() * (max - min + 1))) + min;
}
console.log(randomegen(max, min));
 number=199.55-199;
console.log( number .toFixed(2));