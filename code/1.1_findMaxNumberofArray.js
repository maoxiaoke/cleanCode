// method 1 -- apply()
let arr = [6,4,1,8,1,11,23];
function getMaxOfArray(numArray){
    return Math.max.apply(null, numArray);
}
getMaxOfArray(arr); // 23

// method 2 -- spread operator
let arr = [6,4,1,8,1,11,23];
let max = Math.max(...arr); // 23

// method 3 -- reduce()
let arr = [6,4,1,8,1,11,23];
let max = arr.reduce((a, b) => Math.max(a, b)); //23

// method 4 -- sort()
let arr = [6,4,1,8,1,11,23];
arr.sort((a,b) => a-b);
let max = arr[arr.length-1]; //23
