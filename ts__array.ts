console.log("hello");

//what is array 
// it is datatype used to store more than one value at a time
//we will use array with type annotation as well as
let arr1:number[] = [2,3,4,5];

//this is a basic method of making an array 

//there are 2 other methods also for making 

let arr2:number[] = new Array(1,6,5,3,3);

let arr3:string[] = Array.of("anas","basit","hadi");

console.log(arr1);
console.log(arr2);
console.log(arr3);


// now some array method

let modify_array = arr3.push("umar");
console.log(modify_array) //it will give length
console.log(arr3);

//there are many methods u can checkout i have already learn so not discussing here

//lets use loops

for(let i:number = 0;i < arr3.length;i++){
    console.log(arr3[i])
}
//if don;t give:number type it automatically get the type due to type interference

// now use otherloop 1 by 1

let techCompanies:string[] = ["microsoft","oracle","google","appple","openai","nvidia"];

// foreach

//it iterate the array lets see

//basic syntax

techCompanies.forEach((arrayElem,index)=>{
 console.log(`${index+1}). the ${arrayElem} is among world biggest tech comapnies`);
})

//makng it simple 

techCompanies.forEach((item,index)=> console.log(item));

// for in 
console.log("===============================================")
for (const key in techCompanies) {
   console.log(`this is using for in loop ${techCompanies[key]}`)
}
// for in 
console.log("===============================================")
for (const value of techCompanies) {
   console.log(`this is using for of loop ${value}`)
}

//use map simply is used to iterate and change array with changed in original array
//map always make a copy with mutatating original array
console.log("=================== Map starts ============================")

let companies = techCompanies.map((elem)=>elem+' company');

console.log(companies);

console.log("=================== Filter starts ============================")


let numToFilter:number[] = [3,7,3,6,5];

let even:number[] = numToFilter.filter((item)=>item % 2 === 0);

console.log(even);

