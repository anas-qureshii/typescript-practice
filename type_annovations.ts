//what is type innovation
//it is simply the process of assigning types to variable,parameters and functions
//let see an example

let sumTwoNum = (a: number, b: number): number => {
    return a + b;
}

//let call it 
let plusNum = sumTwoNum(5, 10);
console.log(plusNum)

//while in type annovations
//In TypeScript, type assertion is a mechanism that tells the compiler about the type of a variable.
// there are 3 type of assertions means type giving?
//any,as,angle bracket
// lets see the assertions

// let assertNum = 10;
//as i dont allot any type typescript is so strong that it can automatically detects the type this is called
//the any type assertion
// console.log(assertNum);

// let bracketNum = <number>assertNum; //as number coming from any data type
// let bracketNum = assertNum as number; //as number coming from any data type
// console.log(bracketNum)
// now we will discuss different datatype

//first number
//here are we just use 4 datatyes
// let anyNum:number = 23;
// let myname:string = "Muhammad anas";
// let bignum = BigInt(10n);
// let todayIsSunday:boolean = true;
// console.log(anyNum,myname,bignum,todayIsSunday)

//some exercise
// Declare variables of type number, string, and boolean with appropriate names and values.
// Perform basic arithmetic operations like addition, subtraction, multiplication, and division on the numeric variables.
// Concatenate string variables using the + operator.
// Use comparison operators (==, !=, >, <, >=, <=) to compare numeric and boolean variables.

// let std_name:string = "harry";
// let age:number = 17;
// let aGoodStudent = true;

//first exercise done here
//exercise no 2

// let num1:number = 76;
// let num2:number = 30;

//addition
// console.log("addition");
// console.log(num1 + num2);
// console.log("substraction");
// console.log(num1 - num2);
// console.log("multiplication");
// console.log(num1 * num2);
// console.log("division");
// console.log(num1 / num2);

//exercise no 3

// let firstName:string = "Muhammad";
// let lastName:string = "Anas";
// let fullName:string = "my full name is "+firstName+"-"+lastName

// console.log(fullName)

//tsc type_annovations.ts
//node type_annovations.js

//according to hogwats
// let isMuggle:boolean = false;
// let age:number = 2;

// if(isMuggle && age > 11){
// console.log("congratulations u are seleted in grydinfor")
// }
// else if(!isMuggle && age > 11){
//     console.log("congratulations u are seleted in slytherin")
// }
// else{
//     console.log("else you are not suitable for admission in hogwats");
// }
//tsc type_annovations.ts
//node type_annovations.js
// let yName = prompt("Enter Your Name");
// let message:string = "hello! "+yName;