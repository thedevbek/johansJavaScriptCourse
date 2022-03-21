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
