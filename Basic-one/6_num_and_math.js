//Number
const num =400
console.log(num);

//number as Object
let numOne=new Number(1000)
console.log(numOne);

//Some of the methods in Number are:-
//To string is also one of the method in number

const numTwo=new Number(1200)
console.log(numTwo.toString().length); 
//Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
console.log(numTwo.toExponential(3));
//Fixed 
console.log(numTwo.toFixed(2));
//tolocalstring
const numThree=10000000
console.log(numThree.toLocaleString('en-IN'));