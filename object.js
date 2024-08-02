//singleton
const mySym=Symbol("key")
const jsUser={
    name: "Mini",
    age:16,
    "fullname":"Mini Singh",
    [mySym]:"mykey",
    location: "Jabalpur",
    email:"mini@gmail.com",
    isLogin:false,
    lastLogin:["Monday", "Saturday"]
}
console.log(jsUser.email)
console.log(jsUser["email"]);
console.log(jsUser[mySym]);
console.log(jsUser["fullname"]);
jsUser.email="singhruhi@gmail.com"
//Object.freeze(jsUser)
jsUser.email="frwfr@hmail.com"
console.log(jsUser);
jsUser.greeting=function(){
    console.log("Hello js user");
}
jsUser.greeting2=function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());