function deepClone(obj) {
  var temp;
  //If obj is primary types
  if (obj == null || typeof(obj) != "object"){
    return obj;
  }
  //If obj is Date type
  if (obj instanceof Date) {
    temp = new Date();
    temp.setTime(obj.getTime());
    return temp;
  }
  //If obj is Array type
  if (obj instanceof Array){
    temp = [];
    for (var item of obj){
      temp.push(deepClone(item)); //Considering nested array
    }
    return temp;
  }
  //Otherwise
  temp = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)){ //Make sure key is not from of Prototype
      temp[key] = deepClone(obj[key]);  //Recursion
    }
  }
  return temp;
}

/* testcase 1
var tree = {
  left  : { "left" : null, "right" : null, "data" : 3 },
  right : null,
  data  : 8
};
var cloneTree = deepClone(tree);
console.log(cloneTree); // { left: { left: null, right: null, data: 3 },right: null,data: 8 }
cloneTree.data = 9;
console.log(tree); // { left: { left: null, right: null, data: 3 },right: null,data: 8 }
console.log(cloneTree); // { left: { left: null, right: null, data: 3 },right: null,data: 9 }
*/

/* testcase 2
var arr = [1,[2,3],3];
var cloneArr = deepClone(arr);
console.log(cloneArr); //[ 1, [ 2, 3 ], 3 ]
*/

/* testcase 3
var car = {
  brands : ['xiaoke','yuer','i love you'],
  money: "$80,000"
}
var cloneCar = deepClone(car);
console.log(cloneCar); //{ brands: [ 'xiaoke', 'yuer', 'i love you' ], money: '$80,000' }
*/

// testcase 4
var obj = {
    a: 1,
    b: 2,
    c: undefined,
    sum: function() { return a + b; }
};
var cloneObj = deepClone(obj);
console.log(cloneObj);
