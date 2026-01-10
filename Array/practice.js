//  way to create an empty array in JavaScript?

const array=[]; //it is the correct method to create a empty array
const array2= new Array()//it is also a correct method to create a array

// to add element in the  end of the array 
array.push(1);

// what splice method perform in array 
// remove and add element in your array 

// what happen here 
const splicedemo=[1,2,3,"ashu",true];
const ans=splicedemo.splice(2,4,"monika","himanshu");
// explaniation 
// when you use splice they can remove and edit the existing array element from the element .
// return a slice of array and if you giving some other value the placed the value in your array.

//  Which method returns a new array with elements that pass a test?
// filter 
const arr=[1,25,4,52,6,6,8];
const arr2=arr.filter((ele)=>ele>10);

// console.log(arr.isArray(6));

// write the function sumarray that returns the sum of all number in the array 

function sumArray(arr){
    let ele=0;
    for (let index = 0; index < arr.length; index++) {
       
        ele+=arr[index];
    }
    return ele;
}
const sumans=sumArray(arr);
console.log(sumans);

// remove all the duplicates from array 
function removedupli(arr){
    return [...new Set(arr)];

}
// console.log(removedupli(arr));
