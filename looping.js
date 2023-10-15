// For loop
// While loop
// Do while loop
// For of loop


//------------ For Loop ------------

                            // for (initializer; condition; final-expression) {
                            //code to run         
                            // }

for (let i = 1; i <= 5; i++) {
    console.log('Iteration number : ' + i)
    
}

//------------ While Loop ------------

 let i=1
while (i<=5) {
    console.log('Iteration Number : '+i)
    i++
    
}

//------------ Do While Loop ------------

do {
    console.log(i)
    i++
} while (i<=5);


//------------ For of Loop ------------
                                    // for(const item of array){
                                    //     //code to run
                                    // }

const numArray=[1,2,3,4,5,8]
for (const num of numArray){    //For of ---Special - Best suited of bulk data
    console.log(num)
}