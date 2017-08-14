//testcase 1
var car = {
  brands : ['xiaoke','yuer','i love you'],
  money: "$80,000"
};

var cloneCar = JSON.parse(JSON.stringify(car));

console.log(cloneCar); //{ brands: [ 'xiaoke', 'yuer', 'i love you' ], money: '$80,000' }

//testcase 2
var obj = {
    a: 1,
    b: 2,
    c: undefined,
    sum: function() { return a + b; }
};

var cloneObj = JSON.parse(JSON.stringify(obj));

console.log(cloneObj); //{ a: 1, b: 2 }
