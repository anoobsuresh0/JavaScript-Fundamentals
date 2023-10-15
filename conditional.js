// Used to perform actions based on conditions
// If
// Else
// Else if
// Switch 

const num = 0
if (num > 0) {                                    // if Statement
    console.log('number is positive')
}
else if (num<0) {                                   //if else if
    console.log('number is negative')
}
else{
    console.log('number is zero')
}


//Switch statement

const color='green'
switch (color) {
    case 'red':console.log('Color is Red')
        
        break;
    case 'blue':console.log('Color is Blue')
    break;
    case 'green':   console.log('Color is Green')

    default:
        break;

}