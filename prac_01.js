"use strict";
//@ts-ignore
console.log("hello world");
console.log("we are moving towards more complex things");
let id = 1;
let student_name = "anas";
// we cannot use some keywords that are reserved in ts
let data = ["anas", "basit", "nabia"];
// let records:object = {"name":"anas","age":18}
console.log(data);
// :number or etc this is type:annovation
//function working in typescript
function sum(a, b) {
    return a + b;
}
// we have to assign number to parameters and also define what our function is returning?
console.log(sum(43, 22));
//ts configration file
//as if we have error in our ts file if we compile it will compile the error code
//here configration file stop compile and throws error at starting of compiling
