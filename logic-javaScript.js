let numbers = [100, 20, 3, 105, 99, 18, 57, null, undefined, null];

//////////////////////////////////////////////////////////////
///////////////////////Sum the Numbers///////////////////////
// let total = 0;
// for (i = 0; i < numbers.length; i++) {
//   total = total + numbers[i];
// }
// console.log(total);
// ///////////////REDUCE//////////////////////////////////
// let totals = numbers.reduce((acc, curr) => (acc += curr));
// console.log(totals);

////////////////////////////////////////////////////////////
//////////////Only 1st Min number///////////////////////////
// let minNumber = [];
// // Start coding here
// for (i = 0; i < numbers.length; i++) {
//   minNumbers.push(Math.min(numbers[i]));
// }
// console.log(Math.min(...minNumber));
///////////////////Only 1st Max number////////////////////////////////////////
// console.log(Math.max(...numbers));
/////////////////////Arrange numbers////////////////////////////////////////////////
///////////////Give back 2 number from array//////////////////////////
// let MaxTwoNumber = [];
// function twoMaxNumber(array) {
//   let temp;
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - 1; j++) {
//       if (array[j] < array[j + 1]) {
//         temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   array.splice(2);
//   return array;
// }

// console.log(twoMaxNumber(numbers));
///////////////Min numbers//////////////////////////////////
// function minNumber(items) {
//   for (let i = 0; i < items.length - 1; i++) {
//     for (let j = 0; j < items.length - 1; j++) {
//       if (items[j] > items[j + 1]) {
//         temp = items[j];
//         items[j] = items[j + 1];
//         items[j + 1] = temp;
//       }
//     }
//   }
//   return items;
// }

// console.log(minNumber(numbers));
////////////////Swap numbers in the array////////////////////
// let numbers = [21, 232, 33, 44, 55, 116, 137, 28, 19, 1000];
// for (let i = 0; i < numbers.length; i = i++) {
//   if (i < numbers.length - 1) {
//     let temp = numbers[i];
//     numbers[i] = numbers[i + 1];
//     numbers[i + 1] = temp;
//   }
// }
// console.log(numbers);
//////////////////Filter the Numbers///////////////////////////
// let evenNumbers = [];
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }
// console.log(evenNumbers);

// let oddNumbers = [];
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     oddNumbers.push(numbers[i]);
//   }
// }
// console.log(oddNumbers);

////////////////////UNION/////////////////////////
////////////////////UNION//////////////////////////
// function union(array1, array2) {
//   let newArray = array1.concat(array2);
//   let result = [];
//   for (let i = 0; i < newArray.length; i++) {
//     if (newArray.indexOf(newArray[i]) === i) {
//       result.push(newArray[i]);
//     }
//   }
//   return result;
// }

// union([5, 10, 15], [15, 88, 1, 5, 7]);
// console.log(union([50, 5, 10, 15], [15, 88, 1, 5, 7]));

////////////////////HASOWNPROPERTY//////////////////////////
// function union(x, y) {
//   var obj = {};
//   for (var i = 0; i < x.length; i++) {
//     obj[x[i]] = x[i];
//   }
//   for (var i = 0; i < y.length; i++) {
//     obj[y[i]] = y[i];
//   }
//   var res = [];
//   for (var k in obj) {
//     if (obj.hasOwnProperty(k)) {
//       res.push(obj[k]);
//     }
//   }
//   return res;
// }

// console.log(union([45, 5, 10, 15, 25], [15, 88, 1, 5, 7]));
//////////////////////////////////////////////////////////////
/////////////////////INTERSECTION/////////////////////////////
/////////////////////INTERSECTION//////////////////////////////
// function intersection(array1, array2) {
//   // Start coding here
//   let output = [];
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] == array2[j]) {
//         output.push(array1[i]);
//       }
//     }
//   }
//   return output;
// }

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7]));

// intersection([5, 10, 15, 20], [15, 88, 1, 5, 7]);

/////////////////////Leet Code////////////////////////////////////
/////////////////Length of last words/////////////////////////////////
// var lengthOfLastWord = function (s) {
//   let temp = s.trim().split(" ").pop().length;
//   return temp;
// };

// console.log(lengthOfLastWord("Hello World"));

///////////////// Student Attendance Record I////////////////////////////////////
// let s = "PPALLP";
// var checkRecord = function (s) {
//   if (s.includes("LLL")) return false;
//   let absentCount = 0;
//   for (let i in s) {
//     if (s[i] === "A") absentCount++;
//   }
//   return absentCount < 2;
// };

// console.log(checkRecord(s));

///////////////////////////////////////////////////////
/////////////reverse th numbers///////////////////////
// let newNumbers = [];
// let reverse = numbers.filter((number) => {
//   if (number != undefined) {
//     newNumbers.unshift(number);
//   }
// });
// console.log(newNumbers);

///////////////////////////////////////////////
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// var fizzBuzz = function (n) {
//   let output = [];

//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       output.push("FizzBuzz");
//     } else if (i % 5 === 0) {
//       output.push("Buzz");
//     } else if (i % 3 === 0) {
//       output.push("Fizz");
//     } else output.push(String(i));
//   }
//   return output;
// };

// console.log(fizzBuzz(15));

const movies = [
  {
    title: "Avatar",
    year: "2009",
    runtime: "162 min",
    director: "James Cameron",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    genres: ["Action", "Adventure", "Fantasy"],
    imdbRating: "7.9",
    imdbVotes: "890,617",
  },
  {
    title: "I Am Legend",
    year: "2007",
    runtime: "101 min",
    director: "Francis Lawrence",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
    genres: ["Drama", "Horror", "Sci-Fi"],
    imdbRating: "7.2",
    imdbVotes: "533,874",
  },
  {
    title: "300",
    year: "2006",
    runtime: "117 min",
    director: "Zack Snyder",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
    genres: ["Action", "Drama", "Fantasy"],
    imdbRating: "7.7",
    imdbVotes: "611,046",
  },
  {
    title: "The Avengers",
    year: "2012",
    runtime: "143 min",
    director: "Joss Whedon",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    genres: ["Action", "Sci-Fi", "Thriller"],
    imdbRating: "8.1",
    imdbVotes: "1,003,301",
  },
  {
    title: "The Wolf of Wall Street",
    year: "2013",
    runtime: "180 min",
    director: "Martin Scorsese",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    genres: ["Biography", "Comedy", "Crime"],
    imdbRating: "8.2",
    imdbVotes: "786,985",
  },
  {
    title: "Interstellar",
    year: "2014",
    runtime: "169 min",
    director: "Christopher Nolan",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    imdbRating: "8.6",
    imdbVotes: "937,412",
  },
  {
    title: "Game of Thrones",
    year: "2011–",
    runtime: "56 min",
    director: "N/A",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    genres: ["Adventure", "Drama", "Fantasy"],
    imdbRating: "9.5",
    imdbVotes: "1,046,830",
  },
  {
    title: "Vikings",
    year: "2013–",
    runtime: "44 min",
    director: "N/A",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
    genres: ["Action", "Drama", "History"],
    imdbRating: "8.6",
    imdbVotes: "198,041",
  },
  {
    title: "Gotham",
    year: "2014–",
    runtime: "42 min",
    director: "N/A",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
    genres: ["Action", "Crime", "Drama"],
    imdbRating: "8.0",
    imdbVotes: "133,375",
  },
  {
    title: "Power",
    year: "2014–",
    runtime: "50 min",
    director: "N/A",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
    genres: ["Crime", "Drama"],
    imdbRating: "8.0",
    imdbVotes: "14,770",
  },
  {
    title: "Narcos",
    year: "2015–",
    runtime: "49 min",
    director: "N/A",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    genres: ["Biography", "Crime", "Drama"],
    imdbRating: "8.9",
    imdbVotes: "118,680",
  },
  {
    title: "Breaking Bad",
    year: "2008–2013",
    runtime: "49 min",
    director: "N/A",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
    genres: ["Crime", "Drama", "Thriller"],
    imdbRating: "9.5",
    imdbVotes: "889,883",
  },
  {
    title: "Doctor Strange",
    year: "2016",
    runtime: "N/A",
    director: "Scott Derrickson",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
    genres: ["Action", "Adventure", "Fantasy"],
    imdbRating: "N/A",
    imdbVotes: "N/A",
  },
  {
    title: "Rogue One: A Star Wars Story",
    year: "2016",
    runtime: "N/A",
    director: "Gareth Edwards",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi"],
    imdbRating: "N/A",
    imdbVotes: "N/A",
  },
  {
    title: "Assassin's Creed",
    year: "2016",
    runtime: "N/A",
    director: "Justin Kurzel",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
    genres: ["Action", "Adventure", "Fantasy"],
    imdbRating: "N/A",
    imdbVotes: "N/A",
  },
  {
    title: "Luke Cage",
    year: "2016",
    runtime: "55 min",
    director: "N/A",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
    genres: ["Action", "Crime", "Drama"],
    imdbRating: "N/A",
    imdbVotes: "N/A",
  },
];

let newMovies = movies.map((movie) => {
  for (let genre of movie.genres) {
    console.log([genre]);
  }
  return;
});
