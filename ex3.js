const fs = require('fs');

const fileName = process.argv[2];

/*****************************
 * VERIFY THE DATA
 * ***************************/

const hasOnlyNumbers = (array) => {
  const notNumbers = array.filter((element) => !Number.isInteger(element));
  if (notNumbers.length >= 1) return false;
  return true; 
};

var comparisonCount = 0;

const sumPair = (numbers, k) => {
  comparisonCount = 0;
  for (let i = 0; i < numbers.length; i++) {
    comparisonCount++;
    if (numbers.includes(k - numbers[i])) return true;
  }
  
  return false;
}

var isTherePair = false;
var pairs = [];

const sumPairWithPairs = (numbers, k) => {
  comparisonCount = 0;
  isTherePair = false;
  pairs = [];
  for (let i = 0; i < numbers.length; i++) {
    comparisonCount++;
    if (numbers.includes(k - numbers[i])) {
      isTherePair = true;
      pairs.push([numbers[i], k-numbers[i]]);
    }
  }
  
  return isTherePair;
}

// Méthode synchrone
try {
  const data = fs.readFileSync(fileName, 'utf8');
  const numbers = data.split(' ').map((number) => Number.parseInt(number));
  if (!hasOnlyNumbers(numbers)) return console.error("The data is not valid!");

  console.log('====================================');
  console.log('BEGIN');
  console.log(numbers);
  console.log('====================================\n');

  console.log(`The answer is ${sumPair(numbers, 17)}, with ${comparisonCount} comparisons`);
  console.log(`The answer is ${sumPair(numbers, 19)}, with ${comparisonCount} comparisons`);
  console.log(`The answer is ${sumPairWithPairs(numbers, 19)}, list of pairs: ${pairs}, with ${comparisonCount} comparisons`);

  console.log('\n====================================');
  console.log('END');
  console.log('====================================');
  
} catch (error) {
  console.error(error.message);
}
