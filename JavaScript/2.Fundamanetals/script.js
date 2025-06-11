// 'use strict';
// console.log('Hello, World!');

// let hasDrivingLicense = false;
// const birthYear = 1990;
// const passTest= true;

// if (passTest) {
//     hasDrivingLicense = true;
// }
// console.log(hasDrivingLicense);
// if (hasDrivingLicense) {
//     console.log('I can drive');
// }

// function logger() {
//     console.log('My name is Rajkumar');
// }
// // Calling the function
// logger();

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// }

// const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
// const descGermany = describeCountry('Germany', 83, 'Berlin');
// const descFinland = describeCountry('Finland', 6, 'Helsinki');

// console.log(descPortugal, descGermany, descFinland);

const populations = [10,144,11,4];
console.log(populations.length === 4);

const percentagesofworld= populations => (populations / 7900) * 100;
const percentages = [
  percentagesofworld(populations[0]),
  percentagesofworld(populations[1]),
  percentagesofworld(populations[2]),
  percentagesofworld(populations[3])
];

console.log(percentages);

const ageCalc = function (birthYear)
{
  return 2050 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = ageCalc(birthYear);
  const retirementAge = 65 - age;
  if (retirementAge > 0) {
    console.log(`${firstName} retires in ${retirementAge} years.`);
    return retirementAge;
  }
  else{
    console.log(`${firstName} has already retired.`);
    return retirementAge -1;
  }
  
}

console.log(yearsUntilRetirement(1997, 'Rajkumar'));

