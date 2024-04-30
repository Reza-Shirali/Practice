"use strict";

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

// const cutFruitPieces = (fruit) =>{
//     return fruit * 4
// }

// const fruitProcessor = (apples,oranges) =>{
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
//     return juice
// }

// console.log(fruitProcessor(2,3));


const scoreDolphins = [44,23,71]
const scoreKoalas = [65,54,49]

// const scoreDolphins = [85,54,41]
// const scoreKoalas = [23,34,27]
const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
  const averageScore = (scoreOne + scoreTwo + scoreThree) / 3;
  return averageScore;
};

const aveDolphins = calcAverage(scoreDolphins[0],scoreDolphins[1],scoreDolphins[2])
const aveKoalas = calcAverage(scoreKoalas[0],scoreKoalas[1],scoreKoalas[2])

const checkWinner = (aveDolphins , aveKoalas) =>{
    if(aveDolphins >= 2*aveKoalas){
        console.log(`Dolphins win (${aveDolphins} Vs ${aveKoalas})`);
    }else if(aveKoalas >= 2*aveDolphins ){
        console.log(`Koalas win (${aveKoalas} Vs ${aveDolphins})`);
    }else{
        console.log(`No Team Wins...`);
    }
}

checkWinner(aveDolphins,aveKoalas)