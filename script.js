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


const massMark = 78;
const heightMark= 1.69;
const massJohn = 92;
const heightJohn = 1.95

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
}else{
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`);
}



