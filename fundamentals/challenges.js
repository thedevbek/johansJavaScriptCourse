//* Challenge #1

let massMark = 78; //kilograms for weight
let heightMark = 1.69; //meters for height
let massJohn = 92; //kilograms for weight
let heightJohn = 1.95; //meters for height

// & BMI = mass / height ** 2

markBMI = massMark / heightMark ** 2;
console.log(markBMI);
console.log(markBMI.toFixed(1));

johnBMI = massJohn / heightJohn ** 2;
console.log(johnBMI);
console.log(johnBMI.toFixed(1));

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// $ Challenge 2

console.log(
	`Mark's BMI (${markBMI.toFixed()}) is higher than John's (${johnBMI.toFixed()})!`
);

if (markBMI > johnBMI) {
	console.log(
		`Mark's BMI (${markBMI.toFixed()}) is higher than John's (${johnBMI.toFixed()})!`
	);
} else {
	console.log(
		`John's BMI (${johnBMI.toFixed()}) is higher than Mark's (${markBMI.toFixed()})!`
	);
}

let highestBMI = markBMI < johnBMI;

highestBMI =
	markBMI > johnBMI
		? `Mark's BMI (${markBMI.toFixed()}) is higher than John's (${johnBMI.toFixed()})!`
		: `John's BMI (${johnBMI.toFixed()}) is higher than Mark's (${markBMI.toFixed()})!`;
console.log(highestBMI);

//* Challenge 3

let dolphinScore = (96 + 108 + 89) / 3;
console.log(dolphinScore.toFixed());
let koalasScore = (88 + 91 + 110) / 3;
console.log(koalasScore.toFixed());

if (dolphinScore > koalasScore) {
	console.log(`The Dolphins win with ${dolphinScore.toFixed()}!`);
} else if (koalasScore > dolphinScore) {
	console.log(`The Koalas win with ${koalasScore.toFixed()}!`);
} else if (dolphinScore === koalasScore) {
	console.log(`Tie!`);
}

// $ Bonus Data 1
const scoreMust = 100 >= 0;
let dolphinScore1 = (97 + 112 + 101) / 3;
console.log(dolphinScore1.toFixed());
let koalasScore1 = (109 + 95 + 123) / 3;
console.log(koalasScore1);

if (dolphinScore1 > koalasScore1 && scoreMust) {
	console.log(`The Dolphins win with ${dolphinScore1.toFixed()}!`);
} else if (koalasScore1 > dolphinScore1 && scoreMust) {
	console.log(`The Koalas win with ${koalasScore1.toFixed()}!`);
} else if (dolphinScore1 === koalasScore1 && scoreMust) {
	console.log(`Tie!`);
} else {
	console.log(`No winner!`);
}

//# Bonus Data 2
let dolphinScore2 = (97 + 112 + 101) / 3;
console.log(dolphinScore2.toFixed());
let koalasScore2 = (109 + 95 + 106) / 3;
console.log(koalasScore2.toFixed());

if (dolphinScore2 > koalasScore2 && scoreMust) {
	console.log(`The Dolphins win with ${dolphinScore2.toFixed()}!`);
} else if (koalasScore2 > dolphinScore2 && scoreMust) {
	console.log(`The Koalas win with ${koalasScore2.toFixed()}!`);
} else if (dolphinScore1 === koalasScore2 && scoreMust) {
	console.log(`Tie!`);
} else {
	console.log(`No winner!`);
}

//# Bonus Data 3

let day = 'Sunday';

// switch (day) {
// 	case 'Monday': //day === 'Monday'
// 		console.log(`Plan course structure.`);
// 		console.log(`Go to coding meetup`);
// 		break;
// 	case 'Tuesday':
// 		console.log(`Prepare theory videos.`);
// 		break;
// 	case 'Wednesday':
// 	case 'Thursday':
// 		console.log(`Write code examples.`);
// 		break;
// 	case 'Friday':
// 		console.log(`Record videos.`);
// 		break;
// 	case 'Saturday':
// 	case 'Sunday':
// 		console.log(`Engjoy the weekend :D!`);
// 		break;
// 	default:
// 		console.log(`Not Valid!`);
// }

//!! Make the above switch into a if else statement!

if (day == 'Monday') {
	console.log(`Plan course structure.`);
	console.log(`Go to coding meetup`);
} else if (day == 'Tuesday') {
	console.log(`Prepare theory videos.`);
} else if (day == 'Wednesday' || day == 'Thursday') {
	console.log(`Write code examples.`);
} else if (day == 'Friday') {
	console.log(day == `Record videos.`);
} else if (day == 'Saturday' || day == 'Sunday') {
	console.log(`Engjoy the weekend :D!`);
} else {
	console.log(`Not Valid!`);
}

// $ Coding Challenge #4

// let bill = 250;
// let tip = bill * 0.15;

// let total = bill + tip;

// finalBill =
// 	total >= 50 && total <= 300
// 		? `The final bill was ${bill}, the tip was ${tip}, and the total is ${
// 				bill + tip
// 		  }`
// 		: `No tip added to bill.`;
// console.log(finalBill);

const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
	`The final bill was ${bill}, the tip was ${tip}, and the total is ${
		bill + tip
	}`
);

let credits = 9;
let gradeLevel =
	credits < 30
		? 'Freshman'
		: credits >= 30 && credits <= 59
		? 'Sophmore'
		: credits >= 60 && credits <= 89
		? 'Junior'
		: credits >= 90
		? 'Senior'
		: null;
console.log(gradeLevel);

const age = 3;
const drinkingAge = age >= 18 ? 'You can drink!' : 'Nope!';
console.log(drinkingAge);

// * Or write it like this
age2 = 21;
age2 >= 21 ? console.log('You can drink!') : console.log('Nope!');
// ************************************
