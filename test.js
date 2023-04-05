console.log("hi")

const log = console.log;

let ary = ["purple", "green", "blue"];

let obj1 = { prop1: "Chad", prop2: ary};

let newObj = structuredClone(obj1);


newObj.prop2.push("red");
newObj.prop1 = "John"

console.log("newObj: ",newObj);
console.log("Obj1: ",obj1);