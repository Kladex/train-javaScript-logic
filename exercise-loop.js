// Exercise #2: Convert the Years
let years = [2553, 2522, 2536, 2453, 2503, 2516, 2537, 2540, 2526, 2511];
for (i = 0; i < years.length; i++) {
  years[i] = years[i] - 543;
}
console.log(years);

// Exercise #4: Log the Matrix
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (i = 0; i < matrix.length; i++) {
  for (x = 0; x < matrix.length; x++) {
    console.log(`Matrix (${[i]}, ${x}) is ${matrix[i][x]}`);
  }
}

// Exercise #6: Object Iteration
let scores = {
  student1: 40,
  student2: 60,
  student3: 30,
  student4: 20,
  student5: 80,
  student6: 46,
  student7: 90,
  student8: 81,
  student9: 71,
  student10: 21,
};
let totalScore = 0;

for (let x in scores) {
  totalScore += scores[x];
}
console.log(totalScore);

// Exercise #7 Count the characters
let words = "vivacious coder";
let results = {};

for (let x = 0; x < words.length; x++) {
  var letter = words.charAt(x);
  results[letter] = isNaN(results[letter]) ? 1 : results[letter] + 1;
}

console.log(results);

//////////////findPrimes/////////////////
let findPrimes = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(findPrimes.filter(isPrime));

///////My exercise////////////
let people = [
  {
    name: "kant",
    sex: "male",
    age: 15,
    status: "married",
  },
  {
    name: "fren",
    sex: "female",
    age: 25,
    status: "married",
  },
  {
    name: "celine",
    sex: "female",
    age: 03,
    status: "single",
  },
  {
    name: "top",
    sex: "male",
    age: 18,
    status: "in relationship",
  },
];
let result = {};

function age(info, maxAge) {
  for (let id of info) {
    if (id["age"] <= maxAge) {
      result[id["name"]] = id["age"];
    }
  }
  return result;
}
console.log(age(people, 15));
console.log(result);
console.log(Object.keys(result));
