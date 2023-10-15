let x=10   //Assignment operator

let a=10,c=8    // Arithmetic operator
let b=9
console.log(a+c+b);
console.log(a*c);
console.log(a%c);
console.log(a-b);
console.log(++c);
console.log(--b);


console.log(a==b); // Comparison operator - give true of false .. equal or not equal
console.log(a!=b); // Comparison operator - give true of false .. equal or not equal
console.log(a<=b); 
console.log(c>=b); 
console.log(a!==c); // Comparison operator -Check not just the value but also check is the data types are same or not


const isValidNumber = a > 8 && 8>c    // Logical operator -- && checks both the condition are satisfied then returns true
console.log(isValidNumber);

const isValidDigit = a >9 || 5>b  // Logical operator --either one is satisfied then shows true
console.log(isValidDigit);

const isValid=true                   //Logical operator -- Not operator give compliment answers
console.log(!isValid);


console.log('Brue' + 'Wayne' ) ; // String operator -- Concatinated the string (Joined the string)


const isEven =10%2 ===0 ? true : false    //!--Terniary Operator- checks for conditon if remainder of 10/2 is 0 then return true else returns false
console.log(isEven);

