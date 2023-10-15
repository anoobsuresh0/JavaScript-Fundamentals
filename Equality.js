// == (Allow Coercion)
// ===(Does not allow coercion)


const var1=10
const var2='10'

console.log(var1 == var2) //Coerces the value, ie :- string '10' in var 2 automatically convert to number and check equality -return true
console.log(var1 === var2) // Here types are compared number != string , wont convert implicitly, preffered to use this

// Prefer thriple equal (===)