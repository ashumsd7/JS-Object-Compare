var obj1={one:1};
var obj2={one:1};

console.log(obj1===obj2);

console.log(Object.is(obj1,obj2));


obj3= obj1;

console.log(Object.is(obj1,obj3));