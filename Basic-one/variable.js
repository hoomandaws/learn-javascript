/*Always declare a variable with const when you know that the value should not be changed
const variables can neither be updated nor re-declared.*/
const employeeID=9841;
console.log(employeeID);

// let variables can be updated but not re-declared.
let studentID="196-sec1";
studentID='sec-1';
console.log(studentID);
/*
 They do not support block-level scope. This means that if a variable is defined in a loop or in an 
 if statement it can be accessed outside the block and accidentally redefined leading to a buggy program.
*/
var collegeId="72har";
collegeId="98ram";
console.log(collegeId);
console.table([employeeID,studentID,collegeId])