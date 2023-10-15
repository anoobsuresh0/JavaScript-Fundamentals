// Block Scope
// Function Scope
// Global Scope

//!-------------- Block Scope (Introduced in 205 with let and const keyword)

const myNum =100   // Global Scope Variable
const myName='Superman' //Global Scope Variable wont overwrite a fucntion name (my Name) ie, superman wont print
  
if(true){
    const myName='Anoob' //cant access the const variable 'myname' outside the if function
    console.log(myName)
    console.log(myNum)

}

// console.log(myname)


//!=------------Function Scope

function testFn() {
    const myName='Batman'//cant access the const variable 'myName' outside the if function
    console.log(myName)
    console.log(myNum)
}
testFn()


//!-------------------- Global Scope 
