// $ Fundamentals Part 2 -
// ! Coding Challenge #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins1 = calcAverage(44, 23, 71);
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas1 = calcAverage(65, 54, 49);
const avgKoalas2 = calcAverage(23, 34, 27);
console.log(avgDolphins1);
console.log(avgDolphins2);
console.log(avgKoalas1);
console.log(avgKoalas2);

function checkWinner(avgDolphins1, avgKoalas1) {
	if (avgDolphins1 >= 2 * avgKoalas1) {
		console.log(`Dolphins win! ${avgDolphins1} vs ${avgKoalas1}`);
	} else if (avgKoalas1 >= 2 * avgDolphins1) {
		console.log(`Koalas win! ${avgKoalas1} vs ${avgDolphins1}`);
	} else console.log(`No Winner!!`);
}
checkWinner(avgDolphins2, avgKoalas2);
checkWinner(avgDolphins1, avgKoalas1);

// !Coding Challenge #2

function calcTip(bill) {
	const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
	return tip;
}
const totalWithTip = calcTip(100);
console.log(totalWithTip);

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

// !Coding Challenge #3

const mark = {
	firstName: 'Mark',
	lastName: 'Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

console.log(mark.calcBMI().toFixed(1));

const john = {
	firstName: 'John',
	lastName: 'Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

mark.calcBMI();
john.calcBMI();
console.log(john.bmi.toFixed(1), mark.bmi.toFixed(1));

if (mark.bmi > john.bmi) {
	console.log(
		`${mark.firstName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${
			john.firstName
		}'s BMI (${john.bmi.toFixed(1)})!`
	);
} else if (john.bmi > mark.bmi) {
	console.log(
		`${john.firstName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${
			mark.firstName
		}'s BMI (${mark.bmi.toFixed(1)})!`
	);
}

console.log(
	`${mark.firstName}'s BMI (${mark.bmi.toFixed(1)}) is ${
		john.bmi.toFixed(1) >= mark.bmi.toFixed(1) ||
		john.bmi.toFixed(1) <= mark.bmi.toFixed(1)
			? 'higher'
			: 'lower'
	} than ${john.firstName}'s BMI (${john.bmi.toFixed(1)})!`
);
// % If I make John higher than Mark then this won't work!
