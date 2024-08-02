const myArray=[0,1,2,3,4,5]
console.log(myArray[0]); 
const myHeros=["shaktiman","maagraj"]
const myArr2=new Array(1,2,3,4)
console.log(myArray[1]);
myArray.push(7)
console.log(myArray);
myArray.pop()
myArray.unshift(6)
console.log(myArray);
myArray.shift()
console.log(myArray);
const newArray=myArray.join();
console.log(newArray);
console.log(typeof newArray);
console.log("A",myArray);
const myn=myArray.slice(1,3)
console.log(myn);
console.log("B", myArray);
const myn2=myArray.splice(1,3)
console.log(myn2);
console.log("C", myArray);

