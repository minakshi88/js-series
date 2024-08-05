for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);   
}
let myArr=["mini", "ruhi","anjali"]
console.log(myArr.length);
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element); 
}

let index=0;
while (index<=10) {
    console.log(`value of index is ${index}`);
    index=index+2;
}

//for of
const arr=[2,4,3,6,7]
for (const num of arr) {
    console.log(num);
    
}
const s="hello world"
for(const i of s){
    console.log(i);
    
}
const map=new Map()
map.set('In',"india")
map.set('usa',"united state of america")
map.set('fr', "france")
map.set('In',"indonesia")
console.log(map);
for(const [key,value] of map){
    console.log(key, ':-', value);
    
}
