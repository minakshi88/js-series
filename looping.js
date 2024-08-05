const myObject={
    js:"javaScript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for(const key in myObject){
    console.log(key);
    console.log(`${key} shortcut is for ${myObject[key]}`)
 
}
 const coding=["js","java","cpp","ruby","python"]
 coding.forEach( function (item){
    console.log(item);
    
 } )
 const array=[1,2,3,4,5,6,7,8,9,34]
 const newnums=array.filter((num)=>{
    return num>4
 })
 console.log(newnums);
 
 const shoppingCart=[
    {
    itemName:"js course",
    price:345
 },
 {
    itemName:"python course",
    price:6588
 },
 {
    itemName:"java course",
    price:654
 },
 {
    itemName:"html course",
    price:354
 },
 {
    itemName:"web development course",
    price:87698
 },
 {
    itemName:"data analyst course",
    price:6578
 }
]
const priceToPay=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay);
