// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`);

// !Functions

// function logger() {
// 	console.log(`My name is Bek!`);
// }

// logger(); // @This is calling/running/invoking the function.
// logger();
// logger();
//  % can run the function as many times as I like by using logger();

// function fruitProcessor(apples, oranges) {
// 	let juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// 	return juice;
// }
// const appleJuice = fruitProcessor(5, 7);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(4, 6);
// console.log(appleOrangeJuice);

// % Function Declaration

// function calcAge1(birthYear) {
// 	return 2037 - birthYear;
// }
// const age1 = calcAge1(1972);
// console.log(age1);

// % Function Expression

// const calcAge2 = function (birthYear) {
// 	return 2037 - birthYear;
// };

// const age2 = calcAge2(1972);
// console.log(age2);

// % ==> Functions

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1972);
// console.log(age1, age2, age3);

// const yearsUnitRetirement = (birthYear, firstName) => {
// 	const age = 2022 - birthYear;
// 	const retirement = 75 - age;
// 	return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearsUnitRetirement(1972, 'Bek'));

// // % Functions Calling Other  Functions

// function cutFruitPieces(fruit) {
// 	return fruit * 4;
// }

// function fruitProcessor2(apples, oranges) {
// 	const applePieces = cutFruitPieces(apples);
// 	const orangePieces = cutFruitPieces(oranges);
// 	const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
// 	return juice;
// }
// console.log(fruitProcessor2(2, 3));

// % Arrays
// # Arrays are like big containers that we can throw things in an later reference them.

// const friends = ['Michael', 'Steven', 'Peter'];
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends.length - 1);
// friends[2] = 'Bek';
// console.log(friends);

// const jonas = ['Jonas', 'Smith', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// @ excerises
// const calcAge = function (birthYear) {
// 	return 2037 - birthYear;
// };
// const years2 = [1990, 1967, 2002, 2010, 2018, 1972];
// const age4 = calcAge(years[0]);
// const age5 = calcAge(years[1]);
// const age6 = calcAge(years[years.length - 1]);
// console.log(age4, age5, age6);

// const ages = [
// 	calcAge(years[0]),
// 	calcAge(years[1]),
// 	calcAge(years[years.length - 1]),
// ];
// console.log(ages);

//$ doesn't work cause we can't do operations with arrays
// console.log(calcAge(years2));
// console.log(years + 10);

// % Array methods like push, pop, unshift, shift and ect are like operations

const friends2 = ['Michael', 'Steven', 'Peter'];

// # push and unshift ADDS elements
// const newLength = friends2.push('Bek');
// console.log(friends2);
// console.log(newLength);
// friends2.unshift('John');
// console.log(friends2);

// # pop and shift REMOVES elements
// friends2.pop();
// console.log(friends2);
// friends2.shift();
// console.log(friends2);
// console.log(friends2.indexOf('Steven'));
// console.log(friends2.indexOf('Bob'));
// console.log(friends2.includes('Steven'));
// console.log(friends2.includes('Bob'));

// % Most used case of the .includes  is below //

// if (friends2.includes('Steven')) {
// 	console.log(`You have a friend called Steven`);
// }

// % Objects

// const bek = {
// 	firstName: 'Rebekah',
// 	lastName: 'Johansson',
// 	age: 50,
// 	job: 'programmer',
// 	animals: ['68', 'Blu', 'Hanna'],
// };
// console.log(bek);
// console.log(bek.lastName);
// console.log(bek['lastName']);

// const nameKey = 'Name';
// console.log(bek['first' + nameKey]);
// console.log(bek['last' + nameKey]);

// const interestedIn = prompt(
// 	'What do you want to know about Bek? Choose between firstName, lastName, age, job and animals.'
// );

// if (bek[interestedIn]) {
// 	console.log(bek[interestedIn]);
// } else {
// 	console.log(
// 		`Wrong request! Choose between firstName, lastName, age, job and animals!`
// 	);
// }

// bek.location = 'USA';
// bek['twitter'] = 'thedev_bek';
// console.log(bek);

// console.log(
// 	bek.firstName +
// 		' has ' +
// 		bek.animals.length +
// 		' animals, and her oldest is ' +
// 		bek.animals[0] +
// 		' a dog.'
// );
// % You can write either way with concatenation or Literals
// console.log(
// 	`${bek.firstName} has ${bek.animals.length} animals, and her oldest is ${bek.animals[0]} a dog.`
// );

// const rebekah = {
// 	firstName: 'Rebekah',
// 	lastName: 'Johansson',
// 	birthYear: 1972,
// 	job: 'programmer',
// 	animals: ['68', 'Blu', 'Hanna'],
// 	hasDriversLicense: true,

// 	// calcAge: function (birthYear) {
// 	// 	return 2037 - birthYear;
// 	// },
// 	// calcAge: function () {
// 	// 	// console.log(this);
// 	// 	return 2037 - this.birthYear;
// 	// },
// 	calcAge: function () {
// 		this.age = 2037 - this.birthYear;
// 		return this.age;
// 	},
// 	getSummary: function () {
// 		return `${this.firstName} is a ${this.calcAge()} year old ${
// 			this.job
// 		} and has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`;
// 	},
// };

// console.log(rebekah.calcAge());
// console.log(rebekah.age);

// Challenge==> `Rebekah is a 65 year old programmer and has a drivers license`

// console.log(rebekah.getSummary());

// %  DRY ==> Don't Repeat Yourself <==

// % The Loops

//  # For Loops keeps running while condition is TRUE

// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`Lifting weights repetition ${rep} 🏋🏻`);
// }

// const jonas = [
// 	'Jonas',
// 	'Schmedtmann',
// 	2037 - 1991,
// 	'teacher',
// 	['Michael', 'Peter', 'Steven'],
// 	true,
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//  reading from jonas array
// 	console.log(jonas[i], typeof jonas[i]);
// ! filling types array
// ! types[i] = typeof jonas[i];
// 	types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1972, 2020, 1991, 2007];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
// 	ages.push(2037 - years[i]);
// }
// console.log(ages);

// $ continue and break

// for (let i = 0; i < jonas.length; i++) {
// 	if (typeof jonas[i] !== 'string') continue; //prints out only strings
// 	console.log(jonas[i], typeof jonas[i]);
// }

// for (let i = 0; i < jonas.length; i++) {
// 	if (typeof jonas[i] === 'number') break; //prints out only until you get to the number then doesn't print anymore...breaks
// 	console.log(jonas[i], typeof jonas[i]);
// }

// # We are going to loop backwards 4, 3, ...
// const jonas = [
// 	'Jonas',
// 	'Schmedtmann',
// 	2037 - 1991,
// 	'teacher',
// 	['Michael', 'Peter', 'Steven'],
// 	true,
// ];

// for (i = jonas.length - 1; i >= 0; i--) {
// 	console.log(i, jonas[i]);
// }

// $ loop inside loop

// for (exercise = 1; exercise < 4; exercise++) {
// 	console.log(`-------- Starting exercise ${exercise}`);
// 	for (rep = 1; rep < 6; rep++) {
// 		console.log(`Exercise ${exercise} Lifting rep: ${rep}`);
// 	}
// }

//@ while loop

// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`Lifting weights repetition ${rep} 🏋🏻`);
// }

// let rep = 1;
// while (rep <= 10) {
// 	//while (condition is true keep running until condition is false)
// 	console.log(`WHILE: Lifting weights repetition ${rep} 🏋🏻`);
// 	rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) console.log(`Loop is about to end...`);
}
