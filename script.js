// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2010;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++;
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const massMark = 78;
// const heightMark= 1.69;
// const massJohn = 92;
// const heightJohn = 1.95

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// const firstName = "Jonas";
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName +
//  ", a " +  (year - birthYear)
//   + " years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName},a ${year -
//     birthYear} year old ${job}!`;

// console.log(jonasNew);
// console.log(`Just a regular string...`);
// console.log('String with \n\ multiple \n\ lines');

// const age = 17;

// if(age >= 18){
//     console.log('Sarah can start driving license')
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young.
//     Wait another ${yearsLeft} years:)`)
// }
// const birthYear = 1998;
// let century = 21;
// if(birthYear <= 2000){
//    century = 20;
// }else{
//    century = 21;
// }
// console.log(century);

// const massMark = 78;
// const heightMark= 1.69;
// const massJohn = 92;
// const heightJohn = 1.95

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if(BMIMark > BMIJohn){
//     console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
// }else{
//     console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`);
// }

// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);
// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' * '10');
// console.log('23' / '10');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 1;
// if(money){
//     console.log("Don't spend it all");
// }else{
//     console.log('You should get a job!');
// }
// let height;
// if(height){
//     console.log("YAY! Height is defined");
// }else{
//     console.log('Height is undefined');
// }

// const age = '18';
// if(age === 18) console.log("You just became an adult :D (strict)");
// if(age == 18) console.log("You just became an adult :D (loose)");

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);

// if(favorite === 23){
//     console.log("Cool! 23 is an amazing number")
// }else if(favorite === 7){
//     console.log("7 is also a cool number")
// }else if(favorite === 9){
//     console.log("9 is also a cool number")
// }else{
//     console.log("Number is not 23 or 7")
// }
// if(favorite !== 23) console.log("Why not 23 ?")

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if(shouldDrive){
// //     console.log("Sarah is able to drive!");
// // }else{
// //     console.log("Someone else should drive!");
// // }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//     console.log("Sarah is able to drive!");
// }else{
//     console.log("Someone else should drive!");
// }

// const scoreDolphins = (96 + 100 + 89) / 3;
// const scoreKolas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKolas);

// if(scoreDolphins > scoreKolas){
//    console.log("Dolphins win the trophy");
// }else if(scoreKolas > scoreDolphins){
//    console.log("Koalas win the trophy");
// }else if(scoreDolphins === scoreKolas){
//     console.log("Both win the trophy");
// }

// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Plan Course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "Tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "Wednesday":
//   case "Thursday":
//     console.log("Write code examples");
//     break;
//   case "Friday":
//     console.log("Record videos");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// const age = 23;
// // age >= 18 ? console.log("I like to drink wine") : 
// // console.log("I like to drink water");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2 = drink;
// if(age >= 18){
//     drink2 = 'wine';
// }else{
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
 console.log(`The bill was ${bill} the tip 
 was ${tip} and the total value ${bill + tip}`);