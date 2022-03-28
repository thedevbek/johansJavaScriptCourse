let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);

// !Functions

function logger() {
	console.log(`My name is Bek!`);
}

logger(); // @This is calling/running/invoking the function.
logger();
logger();
//  % can run the function as many times as I like by using logger();

function fruitProcessor(apples, oranges) {
	let juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}
const appleJuice = fruitProcessor(5, 7);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(4, 6);
console.log(appleOrangeJuice);

// % Function Declaration

function calcAge1(birthYear) {
	return 2037 - birthYear;
}
const age1 = calcAge1(1972);
console.log(age1);

// % Function Expression

const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
};

const age2 = calcAge2(1972);
console.log(age2);

// % ==> Functions

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1972);
console.log(age1, age2, age3);

const yearsUnitRetirement = (birthYear, firstName) => {
	const age = 2022 - birthYear;
	const retirement = 75 - age;
	return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUnitRetirement(1972, 'Bek'));

// % Functions Calling Other  Functions

function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
	return juice;
}
console.log(fruitProcessor2(2, 3));

// % Arrays
// # Arrays are like big containers that we can throw things in an later reference them.

const friends = ['Michael', 'Steven', 'Peter'];
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends.length - 1);
friends[2] = 'Bek';
console.log(friends);

const jonas = ['Jonas', 'Smith', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// @ excerises
const calcAge = function (birthYear) {
	return 2037 - birthYear;
};
const years2 = [1990, 1967, 2002, 2010, 2018, 1972];
const age4 = calcAge(years[0]);
const age5 = calcAge(years[1]);
const age6 = calcAge(years[years.length - 1]);
console.log(age4, age5, age6);

const ages = [
	calcAge(years[0]),
	calcAge(years[1]),
	calcAge(years[years.length - 1]),
];
console.log(ages);

//$ doesn't work cause we can't do operations with arrays
console.log(calcAge(years2));
console.log(years + 10);

// % Array methods like push, pop, unshift, shift and ect are like operations

const friends2 = ['Michael', 'Steven', 'Peter'];

// # push and unshift ADDS elements
const newLength = friends2.push('Bek');
console.log(friends2);
console.log(newLength);
friends2.unshift('John');
console.log(friends2);

// # pop and shift REMOVES elements
friends2.pop();
console.log(friends2);
friends2.shift();
console.log(friends2);
console.log(friends2.indexOf('Steven'));
console.log(friends2.indexOf('Bob'));
console.log(friends2.includes('Steven'));
console.log(friends2.includes('Bob'));

// % Most used case of the .includes  is below //

if (friends2.includes('Steven')) {
	console.log(`You have a friend called Steven`);
}
