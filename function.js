// !--------Syntax-------------!
// funtion name(parameter 1, parameter 2, parameter 3){
//     //code to be executed
// }

function greet(username, age) {
    console.log('Good Moring ' + username + ' age ' + age)
}

greet('Bruce', 32)
greet('Clark', 21)
greet('Anoob', 22)



function add(x, y) {
    return x + y
}
const sum = add(5, 18)
console.log(sum)


//--------- Arrow function ------- (introduced in 2015)(=> called fat arrow)

const arrowSum = (a, b) => a + b // No need for braces and return statement if only a single function is doing

const addFive = (num) => num + 5

const plus = arrowSum(8, 7)
console.log(plus)