const mheroes=["thor", "ironMan", "spiderman"]
const dc=["superman", "flash", "batman"]
// mheroes.push(dc)
// console.log(mheroes);
const allheroes=mheroes.concat(dc);
console.log(allheroes)
const all=[...mheroes, ...dc]
console.log(all);
const another=[1,2,3,[4,5,6],7,[6,7, [4,5]]]
const real=another.flat(Infinity)
console.log(real);
console.log(Array.isArray("Mini"));
console.log(Array.from("Mini"));
console.log(Array.from({name:"Mini"}));
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));