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
//   orderDelivery: function ({ address, mainIndex, time, startIndex }) {
//     console.log(address, time, startIndex, mainIndex);
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your declicious pasta with ${ing1},${ing2},${ing3}`);
//   },
// };

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Let's make pasta! Ingredient 2?`),
//   prompt(`Let's make pasta! Ingredient 3?`),
// ];

// restaurant.orderPasta(...ingredients);

// const arr = [1,2,3]
// const newArr = [...arr,4,5,6]
// console.log(newArr);
// console.log(...newArr);

// let newMenu = [...restaurant.mainMenu,"Kabab"]
// console.log(newMenu);

// // Copy array
// const copyNewMenu = [...newMenu]
// newMenu = [...newMenu,"Khoresht"]
// console.log(newMenu);
// console.log(copyNewMenu);

// // Join 2 Array
// const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
// console.log(menu);

// const arr = [1, 2, 3, ...[4, 5, 6]];
// console.log(arr);

// const [a, b, ...others] = [1, 2, 3, 4,];
// console.log(a,b,others);

// const [pizza,,risotto,...otherFood] =  [...restaurant.mainMenu,...restaurant.starterMenu]

// console.log(pizza,risotto,otherFood);

// const {sat , ...weekDays} = restaurant.openingHours;
// console.log(sat,weekDays);

// const add = (...numbers) => {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 5);
// add(2, 5, 8, 9);
// add(2, 5, 15, 18);
// const x = [10,20,30,40,50]
// add(...x)

// restaurant.numGuests = 0;
// const guest =  restaurant.numGuests || 10
// console.log(guest);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const restOne = {
//   name: "Capri",
//   // numGuests: 20,
//   numGuests : 0
// };

// const restTwo = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };

// restOne.numGuests ??= 10;
// restTwo.numGuests ??= 10;
// console.log(restOne.numGuests);
// console.log(restTwo.numGuests);

// restOne.owner &&= "ANONYMOUS"
// restTwo.owner &&= "ANONYMOUS"
// console.log(restOne);
// console.log(restTwo);

// CHALLENGE

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // .1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // .2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // .3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // .4
// const playersFinal1 = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(playersFinal1);

// // .5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // .6

// const printGoals = (...players) => {
//   console.log(players);
//   console.log(`${players.length} goals were scored.`);
// };

// printGoals(...game.scored);

// // .7
//  team1 > team2 && console.log(`Team 2 is more likely to win`);
//  team1 < team2 && console.log(`Team 1 is more likely to win`);

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
//   orderDelivery: function ({ address, mainIndex, time, startIndex }) {
//     console.log(address, time, startIndex, mainIndex);
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your declicious pasta with ${ing1},${ing2},${ing3}`);
//   },
// };

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// // for (const item of menu) {
// //   console.log(item);
// // }

// for (const [i, item] of menu.entries()) {
//   console.log(`${i + 1}: ${item} `);
// }

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.fri?.open);

// const days = ['mon','tue','wed','thu','fri','sat','sun']

// for(const day of days){
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }

// const users = [{name:"jonas", email:"shir.ez.alioffical@gmail.com"}]

// console.log(users[0]?.name ?? "User array empty");

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
//   orderDelivery: function ({ address, mainIndex, time, startIndex }) {
//     console.log(address, time, startIndex, mainIndex);
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your declicious pasta with ${ing1},${ing2},${ing3}`);
//   },
// };

// const properties = Object.keys(restaurant.openingHours)
// console.log(properties);

// let openStr = `we are open on ${properties.length} days: `

// for(const day of properties){
//   openStr += `${day}, `
// }

// console.log(openStr);

// const value = Object.values(restaurant.openingHours)
// console.log(value);

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //.1
// for (const [i, item] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${item}`);
// }

// //.2
// const item = Object.values(game.odds);
// console.log(item);
// let sum = 0;
// for (const avr of item) {
//   sum += Number(avr);
// }
// console.log(`Sum is :${sum}`);
// console.log(`Average is : ${sum / 3}`);

// //.3

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `Victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// //.4

// const scorers = {};
// for (const player of game.scored) {;
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// const newArr = ["pizza", "pasta", "pizza", "pasta", "kabab"];
// const orderSet = new Set(newArr);
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has("bobs"));
// console.log(orderSet.has("pizza"));
// orderSet.delete("pasta")
// console.log(orderSet);
// orderSet.add("pasta")
// console.log(orderSet);
// orderSet.clear()
// console.log(orderSet);

// const rest = new Map();
// rest.set("Name","Reza")
// rest.set(1,"Pizza")
// rest.set(2,"Pasta")
// console.log(rest);

// console.log(rest.has(1));

// const question = new Map([
//   ['question','What is the best programming Language is the world? '],
//   [1,"C"],
//   [2,"Java"],
//   [3,"Javascript"],
//   [true,'Correct :)'],
//   [false,"Try Again :("]
// ])
// console.log(question.get("question"));
// for(const [key,value] of question){
//   if(typeof key === "number") console.log(`Answer ${key} : ${value}`);
// }

// const answerUser = Number(prompt("Your answer:"))

// answerUser === 3 ? console.log(question.get(true)) : console.log(question.get(false));

// const gameEvents = new Map([
//   [17, "Goal⚽"],
//   [36, "Substitution"],
//   [47, "Goal⚽"],
//   [61, "Substitution"],
//   [64, "🟨 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "Substitution"],
//   [72, "Substitution"],
//   [76, "Goal⚽"],
//   [80, "Goal⚽"],
//   [92, "🟨 Yellow card"],
// ]);

// //.1

// const events = new Set(gameEvents.values());
// console.log(events);

// //.2

// gameEvents.delete(64);
// console.log(gameEvents);

// //.3

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// //.3
// const time = [...gameEvents.keys()].pop()
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// //.4

// for(const [key,value] of gameEvents){
//   key < 45 ? console.log(`[FIRST HALF ${key} : ${value}`) : console.log(`[Second Half] ${key} : ${value}`);
// }

// const str =  `reza shirali bayern munich reza bayern reza`

// console.log(str.replaceAll('reza','POWER'));

// const capitalizeName = (name) => {
//   const names = name.split(" ");
//   console.log(names);
//   const namesUpper = [];
//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
//     console.log(namesUpper);
//   }
//   console.log(namesUpper.join(" "));
// };

// capitalizeName("rEzA shRiaLI");

// const bookings = []
// const createBooking = (flightNum,numPassenger = 1 , price = 199) =>{
//     const booking = {
//         flightNum,
//         numPassenger,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking)
// }

// createBooking('LH232')
// createBooking('LH232',12,128)

// const oneWord = (str) => {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = (str) => {
//   const [first, ...others] = str.split(" ");
//   console.log(first);
//   return [first.toUpperCase(), ...others].join(" ");
// };

// const transform = (str, fn) => {
//   console.log(`Original String: ${str}`);
//   console.log(`Transform string: ${fn(str)}`);
//   console.log(`Transform by: ${fn.name}`);
// };

// transform("JavaScript is the best language", upperFirstWord);

// const greet = (greeting) => {
//     return (name) => {
//         console.log(`${greeting} ${name}`);
//     }
// };

// const greeterHey = greet('Hey')
// greeterHey("Jonas")
// greeterHey("reza")

// const lufthansa = {
//   airline: `Lufthansa`,
//   iataCode: "LH",
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.booking.push({
//       flight: `${this.airline} flight ${this.iataCode}${flightNum}`,
//     });
//   },
// };

// lufthansa.book(250,'RezaShirali')
// lufthansa.book(120,'Hossain')
// console.log(lufthansa.booking);

