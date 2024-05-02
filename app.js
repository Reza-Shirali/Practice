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

// const scoreDolphins = [44,23,71]
// const scoreKoalas = [65,54,49]

// // const scoreDolphins = [85,54,41]
// // const scoreKoalas = [23,34,27]
// const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
//   const averageScore = (scoreOne + scoreTwo + scoreThree) / 3;
//   return averageScore;
// };

// const aveDolphins = calcAverage(scoreDolphins[0],scoreDolphins[1],scoreDolphins[2])
// const aveKoalas = calcAverage(scoreKoalas[0],scoreKoalas[1],scoreKoalas[2])

// const checkWinner = (aveDolphins , aveKoalas) =>{
//     if(aveDolphins >= 2*aveKoalas){
//         console.log(`Dolphins win (${aveDolphins} Vs ${aveKoalas})`);
//     }else if(aveKoalas >= 2*aveDolphins ){
//         console.log(`Koalas win (${aveKoalas} Vs ${aveDolphins})`);
//     }else{
//         console.log(`No Team Wins...`);
//     }
// }

// checkWinner(aveDolphins,aveKoalas)

// const arrayOne  = ["reza",24,"FrontEnd Developer"]
// console.log(arrayOne);

// arrayOne.push("bayern")
// console.log(arrayOne);

// arrayOne.unshift("Esteghlal")
// console.log(arrayOne);

// arrayOne.pop()
// console.log(arrayOne);

// arrayOne.shift()
// console.log(arrayOne);

// const calcTip = (bill) => {
//   if (bill > 50 && bill < 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips);
// console.log(total);

// const myObj = {
//   firstName: "reza",
//   lastName:"Shirali",
//   age: 2024-2000,
//   job: "Front End Developer"
// }

// const interestedIn = prompt(`what do you want to know about reza? Choose between firstName , lastName , age , job`)
// console.log(interestedIn);

// alert(myObj[interestedIn])

// console.log(myObj.age);
// console.log(myObj['lastName']);

// const name = "Name"

// console.log(myObj['first' + name]);

// const jonas = {
//   firstName:"Jonas",
//   bestFriends:["Ali","mmd","reza"]
// }

// const string = `${jonas.firstName} has ${jonas.bestFriends.length} , and his best friend is called ${jonas.bestFriends[0]}`
// console.log(string);

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// if (john.calcBmi() > mark.calcBmi()) {
//   console.log(
//     `${john.fullName}'s BMI (${Math.round(john.bmi)}) is higher than ${
//       mark.fullName
//     }'s (${Math.round(mark.calcBmi())})`
//   );
// } else {
//   console.log(
//     `${mark.fullName}'s BMI (${Math.round(mark.bmi)}) is higher than ${
//       john.fullName
//     }'s (${Math.round(john.calcBmi())})`
//   );
// }

// for(let rep = 1 ; rep <=10;rep++){
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

const years = [1990, 2000, 2010, 2020, 2024];

const ages = [];

for (let i = 0; i < years.length ; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);
