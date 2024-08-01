let score="33we3";
console.log(typeof score);  //String 
let valueInNumber=Number(score)
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);  //NaN not a number

let ss=null;
console.log(typeof ss);  //object
let valueInNumber1=Number(ss)
console.log(typeof valueInNumber1);  // number
console.log(valueInNumber1); //0

let sss=undefined;
console.log(typeof sss);  //undefined
let valueInNumber2=Number(sss)
console.log(typeof valueInNumber2);  // number
console.log(valueInNumber2); //NaN

let ssss=true;
console.log(typeof ssss);  //boolean
let valueInNumber3=Number(ssss)
console.log(typeof valueInNumber3);  // number
console.log(valueInNumber3); //1

//"33" =>33
// "34fgs" =>NaN

let isLoggedIn=""
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true; 0=> false
// "" => false
// "sonam" =>true


let someNum=44
let stringNumber=String(someNum)
console.log(stringNumber);
console.log(typeof stringNumber);



//44 =>"44"

//primitive
//7type: String, Number, Boolean, null, undefined, symbol,BigInt

//Reference(Non-primitive)
//Array, Objects, Functions

//JavaScript is a dynamically typed language.
//This means that the type of a variable is determined at runtime, not at compile time. You don't need to explicitly declare the type of a variable when you create it.
//stack memory is used by primitive datatype
//heap memory is used by non primitive datatype