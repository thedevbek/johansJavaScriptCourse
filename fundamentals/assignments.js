//% Values and Variables
const country = 'Unites States of America';
const continent = 'North America';
let population = 330;
console.log(country, continent, population);

//% Data Types
let isIsland = true;
let language = 'English';
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//% Basic Operators
const dividedAmerica = population / 2;
console.log(dividedAmerica);
const increasedAmerica = population + 1;
console.log(increasedAmerica);
const finlandPopulation = 6;
console.log(finlandPopulation);

console.log(population > finlandPopulation);

const averagePopulation = 33;
console.log(population < averagePopulation);

const description =
	' The ' +
	country +
	' is in ' +
	continent +
	', and its ' +
	population +
	' million people speak ' +
	language +
	'.';
console.log(description);

// # Strings and Template Literals

const description2 = ` The ${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description2);

//$  IF / Else Statements

if (population > 33) {
	console.log(`${country}'s population is above average.`);
} else {
	console.log(
		`${country}'s population is ${33 - population} million below average.`
	);
}

// !! Equality Operators: == vs ===

// const numNeighbours = prompt(
// 	'How many neighbours countries does your country have?'
// );

const numNeighbours = Number(
	prompt('How many neighbours countries does your country have?')
);

if (numNeighbours === 1) {
	console.log('Only 1 border!');
} else if (numNeighbours > 1) {
	console.log('More than 1 border');
} else {
	console.log('No borders');
}

// % Logical Operators

// @Sarah want to live in a country less 50 million language English isNotIsland

if (population < 50 && language === 'English' && !isIsland) {
	console.log(`You should live in the ${country}`);
} else {
	console.log(`${country} does not meet your criteria.`);
}

// @ The switch statement

switch (language) {
	case 'Chinese':
	case 'Mandarin':
		console.log(`Most number of native speakers`);
		break;
	case 'Spanish':
		console.log('2nd place in number of native speakers');
		break;
	case 'English':
		console.log('3rd place');
		break;
	case 'Hindi':
		console.log('4th place in number of native speakers');
		break;
	case 'Arabic':
		console.log('5th most spoken language');
		break;
	default:
		console.log('Great language too :D');
}

//%  Two ways to write The Conditional (Ternary) Operator

average =
	population > 33
		? `USA's population is above average.`
		: `USA's population is below average.`;
console.log(average);

// # or you can write it like below //

console.log(
	`${country}'s population is ${population > 33 ? 'above' : 'below'} average.`
);

// $ FUNCTION

function describeCountry(country, population, capitalCity) {
	const myHome = `${country} has ${population} million people and it's capital city is ${capitalCity}.`;
	return myHome;
}
const home = describeCountry('United States of America', 330, 'Washington DC');
console.log(home);
const july = describeCountry('Spain', 47, 'Madrid');
console.log(july);
const freedom = describeCountry('Ukraine', 41, 'Kyiv');
console.log(freedom);

// @ Function Declaration

function percentageOfWorld1(population) {
	return ((population / 7900) * 100).toFixed(2);
}
const percentage1 = percentageOfWorld1(1147); //!China
console.log(percentage1);
const percentage2 = percentageOfWorld1(145); //!Russia
console.log(percentage2);
const percentage3 = percentageOfWorld1(131); //!Mexico
console.log(percentage3);

// @ Function Expression

const countryPercentage = function (population) {
	return ((population / 7900) * 100).toFixed(2);
};
const countryPercentage1 = countryPercentage(66); //! Spain
console.log(countryPercentage1);
const countryPercentage2 = countryPercentage(334); //! USA
console.log(countryPercentage2);
const countryPercentage3 = countryPercentage(41); //! Ukraine
console.log(countryPercentage3);

// @ ==> Function

// const worldPercentage = (population) => ((population / 7900) * 100).toFixed(2);
// const countryWorldPercentage = worldPercentage(68); //! UK
// console.log(countryWorldPercentage);

// @ Functions Calling Other Functions

function describePopulation(country, population) {
	percentPop = percentageOfWorld1(330);
	const pop = `${country} has ${population} million people, which is about ${percentPop} of the world.`;
	return pop;
}
console.log(describePopulation('America', 330));

const calcAge = function (birthYear) {
	return 2022 - birthYear;
};

const years = [1972, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
	calcAge(years[0]),
	calcAge(years[1]),
	calcAge(years[years.length - 1]),
];
console.log(ages);
//USA 330, UK, 68, Spain 66, Ukraine 41
const percentages = [330, 68, 66, 41];
console.log(percentages.length);

const worldPercentage = (population) => ((population / 7900) * 100).toFixed(2);

const populationPercentageUSA = worldPercentage(percentages[0]);
console.log(populationPercentageUSA);
const populationPercentageUK = worldPercentage(percentages[1]);
console.log(populationPercentageUK);
const populationPercentageSpain = worldPercentage(percentages[2]);
console.log(populationPercentageSpain);
const populationPercentageUkraine = worldPercentage(percentages[3]);
console.log(populationPercentageUkraine);

const neighbours = [
	'India',
	'Bangladesh',
	'Bhutan',
	'Nepal',
	'Pakistan',
	'Sri Lanka',
];

neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
neighbours.includes('Germany');
console.log(neighbours.includes('Germany'));
neighbours[neighbours.indexOf('Bangladesh')] = 'Republic of Sweden';
console.log(neighbours);
