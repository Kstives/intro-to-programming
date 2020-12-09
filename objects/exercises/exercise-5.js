let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = new Object(myProtoObj); // This copies myProtoObj, doesn't make a prototype
console.log(myObj);

// Launch School solution
let myObj2 = Object.create(myProtoObj);
console.log(myObj2);
console.log(myObj2.foo);