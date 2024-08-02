function sayMyName(){
    console.log("m");
    console.log("i");
    console.log("n");
    console.log("i");
}
sayMyName();
function addTwoNumber(number1, number2){
   console.log(number1+number2)
}
addTwoNumber(3,5)
addTwoNumber(3,'a')
addTwoNumber(3,null)

function loginUser(username){
    if(username==undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`

}
console.log(loginUser("minakshi"))
console.log(loginUser(""));//just logged in
console.log(loginUser());// undefined just logged in

function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(100,400,600));
// here ... is the rest operator amd also it is known as spread operator

function calculate(val1, val2,...num1){ // mostly asked in interview
    return num1
}
console.log(calculate(200,355,888,255,111));

const user={
    username:"Minakshi",
    price: 300
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) // with making object 
handleObject({// without making object directlypasss it
    username:"Aparna",
    price:456
})


const myNewArray=[345,654,2324,6786,5674]
function handleArray(getArray){
    return getArray[1]
}
console.log(handleArray(myNewArray));
console.log(handleArray([343,354,23,567]));//directly pass the value