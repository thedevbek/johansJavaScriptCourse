//* Values and Variables
const country = 'Unites States of America';
const continent = 'North America';
let population = 330;
console.log(country, continent, population);

//* Data Types
const isIsland = false;
let language = 'English';
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//* Basic Operators
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

const description2 = ` The ${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description2);
