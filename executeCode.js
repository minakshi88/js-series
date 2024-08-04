 //JavaScript Execution context
 //1 Global execution context
 //2 function execution context
 //3 eval execution context

 let val1=10;
 let val2=6;
 function addSum(a,b){
    let total=a+b;
    return total;
 }
 let result1=addSum(val1,val2);
 let result2=addSum(56,8);
 console.log(result1);
 console.log(result2);
 
 