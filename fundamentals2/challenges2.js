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

function calcTip(total) {
	const tip = total <= 300 && total >= 50 ? total * 0.15 : total * 0.2;
	return tip + total;
}
const totalWithTip = calcTip(500);
console.log(totalWithTip);

const calcAge = (birthYear) => 2037 - birthYear;
const age1 = calcAge(1972);
const age2 = calcAge(1982);
const age3 = calcAge(1992);
console.log(age1, age2, age3);
