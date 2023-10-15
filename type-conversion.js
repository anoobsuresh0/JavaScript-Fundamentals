                // Convert one type to another
                // Implicit conversion (type coercion) - JavaScript automatically convert
                // Explicit Conversion - Manually convert

//  !------------- Implicit conversion--------!
console.log(2+'3'); // Result is a string after concatination
console.log(true+'3'); // Result is a string after concatination
console.log('4'-'2'); //JavaScript converts string 4 and 2 into numbers and do the arithmetic operation
console.log('3'*'5'); //Converted to number
console.log('6'/'3');  //Converted to number

console.log('Bruce'-'Wayne'); // Result in not a number (NaN) 
console.log('5'- true); //true is treated as 1 (if + used it will concatinate)
console.log('5'- false)  // Fasle is treated as 2 (if + used it will concatinate)
console.log('5'-null) //Null treated as 0
console.log(5+undefined) //NaN


//  !------------- Explicit conversion--------!
console.log(Number('5')) //Converts strig to number
console.log(Number(false))
console.log(Number(''))

console.log(parseInt('5')) //Integer
console.log(parseFloat('3.14'))  // floating point

console.log(String(500))         // Print 500 as a string
console.log(String(true))       //Convert to string
console.log(String(null))       //Convert to string
console.log(String(undefined))  //Convert to string

console.log((500).toString())  // Another method to convert to string but wont work for null or undefined


console.log(Boolean(10)) //convert to boolean ,
console.log(Boolean(null)) //  Null, Undefined, 0, '' ,Nan will output false everything else will be true 
console.log(Boolean('  ')) //  return true as spaces are considered not empty

