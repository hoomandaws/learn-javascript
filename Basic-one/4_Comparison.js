//Simple comparison
let a=5
let b=3
console.log(a==b);//false
console.log(a>b);//true
console.log(a>=b);//true
console.log(a!=b);//true

//null comparision should be ignore 
console.log(null==b);//false
console.log(null>a);//false

//undefined comparision should be ignore
console.log(undefined==a);//false
console.log(undefined!=b);//True

//Strict equality check or triple check
console.log("5"===a);//false
console.log("r"==="r");//true

/**
 * Datatype Summery 
 * There are Two Type of Datatypes
 * 1)Primitive Datatypes
 *  =>Number,String,boolean,null,Undefined,BingInt,Symbole
 * 2)Non-Primitive Datatypes
 *  =>array,object,Function
 */
