let numbers = [100, 20, 3, 105, 99, 18, 57];

////////////////////////////////////////////////////////////
/////////////////////Sum the Numbers///////////////////////
let total = 0;
for (i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}
console.log(total);
///////////////REDUCE//////////////////////////////////
let totals = numbers.reduce((acc, curr) => (acc += curr));
console.log(totals);

//////////////////////////////////////////////////////////
////////////Only 1st Min number///////////////////////////
let minNumber = [];
// Start coding here
for (i = 0; i < numbers.length; i++) {
  minNumber.push(Math.min(numbers[i]));
}
console.log(Math.min(...minNumber));
/////////////////Only 1st Max number////////////////////////////////////////
console.log(Math.max(...numbers));
///////////////////Arrange numbers////////////////////////////////////////////////
/////////////Give back 2 number from array//////////////////////////
let MaxTwoNumber = [];
function twoMaxNumber(array) {
  let temp;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] < array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  array.splice(2);
  return array;
}

console.log(twoMaxNumber(numbers));
///////////Min numbers//////////////////////////////////
function minNumbers(items) {
  for (let i = 0; i < items.length - 1; i++) {
    for (let j = 0; j < items.length - 1; j++) {
      if (items[j] > items[j + 1]) {
        temp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = temp;
      }
    }
  }
  return items;
}

console.log(minNumbers(numbers));
//////////////Swap numbers in the array////////////////////
// let numbers = [21, 232, 33, 44, 55, 116, 137, 28, 19, 1000];
for (let i = 0; i < numbers.length; i = i++) {
  if (i < numbers.length - 1) {
    let temp = numbers[i];
    numbers[i] = numbers[i + 1];
    numbers[i + 1] = temp;
  }
}
console.log(numbers);
////////////////Filter the Numbers///////////////////////////
let evenNumbers = [];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers);

let oddNumbers = [];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}
console.log(oddNumbers);

//////////////////UNION/////////////////////////
//////////////////UNION//////////////////////////
function union(array1, array2) {
  let newArray = array1.concat(array2);
  let result = [];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray.indexOf(newArray[i]) === i) {
      result.push(newArray[i]);
    }
  }
  return result;
}

union([5, 10, 15], [15, 88, 1, 5, 7]);
console.log(union([50, 5, 10, 15], [15, 88, 1, 5, 7]));

//////////////////HASOWNPROPERTY//////////////////////////
function union(x, y) {
  var obj = {};
  for (var i = 0; i < x.length; i++) {
    obj[x[i]] = x[i];
  }
  for (var i = 0; i < y.length; i++) {
    obj[y[i]] = y[i];
  }
  var res = [];
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      res.push(obj[k]);
    }
  }
  return res;
}

console.log(union([45, 5, 10, 15, 25], [15, 88, 1, 5, 7]));
////////////////////////////////////////////////////////////
///////////////////INTERSECTION/////////////////////////////
///////////////////INTERSECTION//////////////////////////////
function intersection(array1, array2) {
  // Start coding here
  let output = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        output.push(array1[i]);
      }
    }
  }
  return output;
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7]));

intersection([5, 10, 15, 20], [15, 88, 1, 5, 7]);

///////////////////Leet Code////////////////////////////////////
///////////////Length of last words/////////////////////////////////
var lengthOfLastWord = function (s) {
  let temp = s.trim().split(" ").pop().length;
  return temp;
};

console.log(lengthOfLastWord("Hello World"));

/////////////// Student Attendance Record I////////////////////////////////////
let s = "PPALLP";
var checkRecord = function (s) {
  if (s.includes("LLL")) return false;
  let absentCount = 0;
  for (let i in s) {
    if (s[i] === "A") absentCount++;
  }
  return absentCount < 2;
};

console.log(checkRecord(s));

/////////////////////////////////////////////////////
///////////reverse th numbers///////////////////////
let newNumbers = [];
let reverse = numbers.filter((number) => {
  if (number != undefined) {
    newNumbers.unshift(number);
  }
});
console.log(newNumbers);

/////////////////////////////////////////////
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

var fizzBuzz = function (n) {
  let output = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else output.push(String(i));
  }
  return output;
};

console.log(fizzBuzz(15));
