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

// const years = [1990, 2000, 2010, 2020, 2024];

// const ages = [];

// for (let i = 0; i < years.length ; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// const jonas = [
//   "jonas",
//   2034 - 2000,
//   "shirali",
//   true,
//   ["mehdi", "ali", "kasra"],
// ];

// console.log(`--- ONLY STRING ---`);
// for(let i = 0 ; i < jonas.length ; i++){
//   if(typeof jonas[i] !== 'string') continue
//   console.log(jonas[i] , typeof jonas[i]);
// }

// console.log(`--- BREAK WITH NUMBER`);
// for(let i = 0 ; i <jonas.length ; i++){
//   if(typeof jonas[i] === "number") break;
//   console.log(jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---- Starting exercise ${exercise} ----`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise} : Lifting weight  repetition ${rep}🏋️‍♂️`);
//   }
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Loop is about to end...`);
// }

// const calcTip = (bill) => {
//   if (bill > 50 && bill < 300) {
//     const tip = bill * 0.15;
//     tips.push(tip);
//     totals.push(bill + tip);
//   } else {
//     const tip = bill * 0.2;
//     tips.push(tip);
//     totals.push(bill + tip);
//   }
// };
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   calcTip(bills[i]);
// }

// console.log(tips);
// console.log(totals);

// // BONUS

// const calcAverage = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   const ave = sum / arr.length;
//   return `Average is : ${ave}`;
// };

// let input = [];
// for (let i = 0; i < tips.length; i++) {
//   const value = Math.trunc(tips[i]);
//   input.push(value);
// }
// console.log(calcAverage(input));

// const temperaturesOne = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5,112];
// const temperaturesTwo = [15, 16, 2, 80, -46, 64, 70];

// const calcTempAmplitude = (tempsOne,tempsTwo) => {
//   const temps = [...tempsOne, ...tempsTwo];
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== "number") continue;
//     if (max < temps[i]) {
//       max = temps[i];
//     }
//     if (min > temps[i]) {
//       min = temps[i];
//     }
//   }
//   console.log(min, max);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperaturesOne,temperaturesTwo);

// console.log(amplitude);

// const measureKelvin = () =>{
//   const measurement = {
//     type : 'temp',
//     unit : 'celcius',
//     value: +prompt(`Degrees Celcius:`)
//   }
//   const kelvin = measurement.value + 273
//   return kelvin
// }

// console.log(measureKelvin());

// const testOne = [17, 21, 23];
// const testTwo = [12, 5, -5, 0, 4];

// const printForecast = (arr) => {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}°C in ${i + 1} days... `;
//   }
//   console.log('... '+str);
// };
// console.log(`--- Test One ---`)
// printForecast(testOne)
// console.log(`--- Test Two ---`);
// printForecast(testTwo)

// const calcAge = (birthYear) => {
//   const age = 2037 - birthYear

//   const printAge = () => {
//     const output = `${firstName}, You are ${age} , born in ${birthYear}`
//     console.log(output);

//     if(birthYear>=1991 && birthYear <=1996){
//       const str = `Oh, and you are a millenial,${firstName}`
//       console.log(str);
//     }
//   }
//   printAge()
//   return age
// }
// const firstName = "j"
// calcAge(1991)

// const j = {
//   firstName: "j",
//   lastName: "a",
//   age: 24,
// };

// const tina = {
//   firstName: "tina",
//   lastName: "a",
//   age: 22,
// };

// Object.assign(j,tina);
// dAfterChangeLastName.lastName = "a";
// dAfterChangeLastName.age = 27;

// console.log(d);
// console.log(d);

// console.log(tina);
// console.log(d);

// const restaurant = {
//   name: "Classico Italiano",
//   location: "via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (startIndex, mainIndex) {
//     return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery : function({address , mainIndex,time,startIndex
//   }){
//     console.log(address,time,startIndex,mainIndex);
//   }
// };

// let [starter, main] = restaurant.categories;
// console.log(starter, main);

// [starter, main] = [main, starter];

// console.log(starter, main);

// const [startCourse , mainCourse] = restaurant.order(2,0)
// console.log(startCourse , mainCourse);

// const nested = [2,4,[8,9]]
// const [first,second] = nested
// const [i,,[j,m]] = nested
// console.log(i,j,m);

// // const {name , openingHours , categories} = restaurant
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const {menu = [] , starterMenu : starter = []} = restaurant
// console.log(menu , starter);

// restaurant.orderDelivery({
//   time:"22:30",
//   address:"Via del Sole , 21",
//   mainIndex :2 ,
//   startIndex : 2
// })

const restaurant = {
  name: "Classico Italiano",
  location: "via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery : function({address , mainIndex,time,startIndex
  }){
    console.log(address,time,startIndex,mainIndex);
  }
};

const arr = [1,2,3]
const newArr = [...arr,4,5,6]
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu,"Kabab"]
console.log(newMenu);