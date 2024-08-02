const tinder={}
tinder.id="236abc"
tinder.name="sunny"
tinder.isLoginn=false
console.log(tinder);
const regular={
    userfullname:{
        firstname:"roshni",
        lastname:"garg"
    }
}

console.log(regular.userfullname );
//console.log(regular.userfullname.userfullname.firstname);
const ob1={1:"a", 2:"b"}
const ob2={3:"a", 4:"b"}
const ob3={ob1,ob2};
const ob4=Object.assign({},ob1,ob2)
console.log(ob4);
const user=[
    {
        id:1,
        email:"h@gmail.com"
    },{
        id:1, 
        email:"f@gmail.com"
    }
]
user[1].email
console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));
console.log(tinder.hasOwnProperty('isLoginn'));