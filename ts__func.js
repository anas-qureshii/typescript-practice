"use strict";
//type interference 
// it is simple a process which typescript compiler autmticaly detects the type of variable
console.log("hello we will discuss about functions");
//what is function 
//how many types of function in ts
//what is function parameters,optional parameters and rest parameters
//it lets we have to sum 2 numbers
//we want to perform addition of 2 number again and again it increase length which is not good
//here come function in picture
//basic structure
function xyz() {
    console.log("hello");
}
//how to call function 
xyz();
//now paramets
//as proceeding to parametrs we dicuss about arrow functions
let abc = () => {
    console.log("hello from arrow functions");
};
abc();
//parameters
function greetMsg(name) {
    console.log("hello " + name + " welcome to ts world");
}
greetMsg("anas");
//now work with optinal parametrs to make an parameters option name?
function welcome(name, hotel) {
    if (hotel) {
        console.log("welcome " + name + " to our hotel (" + hotel + ")");
    }
    else {
        console.log("welcome " + name + " to our hotel ");
    }
}
// using concatation but using template string is good and easy
welcome('basit', 'indus hotal hyderabad');
welcome('anas', 'pearl hotel karachi');
welcome('john');
//now using type annotations
//what is void
//how we hande type
//lets make a function that returns a warning message means returning a string
function warning(name, packageName, percentUsed) {
    return `Mr ${name} your ${packageName} is ${percentUsed}% used. use your resources effeciently`;
}
let msg = warning("Muhammad Anas", "monthly zong bundle", 67);
console.log(msg);
