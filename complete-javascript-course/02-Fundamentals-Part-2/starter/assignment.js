// 33. Functions
function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
}

// 34. Function Declarations vs Expressions
const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100 + "%";
}

const chinaPopulation1 = percentageOfWorld1(1441);

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100 + "%";
};
const chinaPopulation2 = percentageOfWorld2(1441);

// 35. Arrow Functions
const percentageOfWorld3 = (population) =>
  (population / worldPopulation) * 100 + "%";

const chinaPopulation3 = percentageOfWorld3(1441);

// 36. Functions Calling Other Functions
const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}`;
};

// 39. Introduction to Arrays
const populations = [10, 1441, 332, 83];
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

// 40. Basic Array Operations(Methods)
const neighbours = Array("North Korea", "China", "Japan");
neighbours.push("Utopia");
neighbours.pop();
neighbours[neighbours.indexOf("Japan")] = "Fxxkin Japs";

// 42. Introduction to Objects
const myCountry = {
  country: "Korea",
  capital: "Seoul",
  language: "Korean",
  population: 52,
  neighbours: Array("North Korea", "China", "Japan"),
};
