'use strict'


// function bayern(apple,orange) {
//     console.log(apple,orange);
//     const juice = `${apple} apple and ${orange} orange`
//     return juice
// }

// console.log(bayern(2,4));


// function culAge1(age){
//     return 2037 - age
// } 


// const culAge2 = function (age){
//     return 2037 - age
// }



// console.log(culAge1(2000));
// console.log(culAge2(1999));


// const printName = (firstName) =>{
//    return `My name is ${firstName}`
// }

// console.log(printName("Reza"));

const cutFruitPieces = (fruit) =>{
    return fruit * 4
}


const fruitProcessor = (apples,oranges) =>{
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange` 
    return juice
}

console.log(fruitProcessor(2,3));