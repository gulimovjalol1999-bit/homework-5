"use strict";
//////////////////1-4: Arrayga oid masalalar
// 2 - masala;
// function mostFrequent(arr) {
//   let count = {};
//   let maxCount = 0;
//   let result = 0;
//   for (let element of arr) {
//     count[element] = (count[element] || 0) + 1;
//     if (count[element] > maxCount) {
//       maxCount = count[element];
//       result = element;
//     }
//   }
//   return result;
// }

// console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));
// console.log(mostFrequent(["a", "b", "a", "c", "a", "b"]));
// console.log(mostFrequent([5, 5, 5, 5]));

//3-masala
// function juftToq(arr) {
//     let result = []
//     for (const element of arr) {
//         if (element % 2 === 0) {
//             result.push(element * element)
//         }else{
//             result.push(element)
//         }
//     }
//   return result
// }

// console.log(juftToq([1, 2, 3, 4, 5, 6, 7, 8]));

//4-masala
// function isPailindrome(word) {
//   let reversed = word.split("").reverse().join("");
//   return word === reversed;
// }

// function getPalindromes(arr) {
//   return arr.filter(isPailindrome);
// }

// console.log(getPalindromes(["level", "hello", "radar", "world"]));

// console.log(getPalindromes(["madam", "racecar", "js", "noon"]));

// function getPalindromes(arr) {
// return arr.filter(w => w = w.split('').reverse().join(''))
// }

// console.log(getPalindromes(["level", "hello", "radar", "world"]));

// console.log(getPalindromes(["madam", "racecar", "js", "noon"]));

///////////////////////////////////////5-9

//1-masala
// function twoString(str) {
//   let words = str.split(" ");
//   let count = {};
//   for (let word of words) {
//     count[word] = (count[word] || 0) + 1;
//   }
//   return Object.keys(count).filter((word) => count[word] === 2);
// }

// console.log(
//   twoString("level, level, level, hello, hello, world, age, left , left")
// );

//2-masala
// function lengthString(str) {
//   return str.split(" ").sort((a, b) => b.length - a.length).join(", ")
// }

// console.log(lengthString("salom dunyo javascript js html css"));

//3-masala
// function firstLetter(text) {
// let words = text.split(" ")
// let result = ""
// for (const word of words) {
//     if (word.length > 0) {
//         result += word[0]
//     }
// }
//     return result
// }

// console.log(firstLetter("macbook pro m5 hello user"));

//4-masala
// function squareDigits(str) {
//   let result = "";

//   for (const ch of str) {
//     if (ch >= '0' && ch <= '9') {
//       result += (ch * ch);
//     } else {
//       result += ch;
//     }
//   }

//   return result;
// }

// console.log(squareDigits("1, 2, 3, 4, abc"));




///////////////////////////////homeWork

//1-masala
// function positiveEvenSquareSum(arr) {
//   let sum = 0;
//   for (const element of arr) {
//     if (element >= 0 && element % 2 === 0) {
//       sum += element * element;
//     }
//   }
//   return sum;
// }

// console.log(positiveEvenSquareSum([-3, 4, 7, -2, 6, 5, 8]));

//2-masala
// function checkTwoArray(arr1, arr2) {
//   for (const element1 of arr1) {
//     for (const element2 of arr2) {
//       if (element1 === element2) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(checkTwoArray([1, 2, 3, 4], [0, 6]));
// console.log(checkTwoArray([3, 1], [4, 0]));
// console.log(checkTwoArray([1, 2, 3, 4], [0, 6]));
// console.log(checkTwoArray([9, 9, 8], [8, 9]));
// console.log(checkTwoArray([1, 2, 3, 4], [2, 3]));

// function checkTwoArray(arr1, arr2) {
// for (const element of arr1) {
//     if (arr2.includes(element)) {
//         return false
//     }
// }
// return true
// }

// console.log(checkTwoArray([1, 2, 3, 4], [0, 6]));
// console.log(checkTwoArray([3, 1], [4, 0]));
// console.log(checkTwoArray([1, 2, 3, 4], [0, 6]));
// console.log(checkTwoArray([9, 9, 8], [8, 9]));
// console.log(checkTwoArray([1, 2, 3, 4], [2, 3]));

//3-masala
// function sortArray(arr1, arr2, str) {
//     let numbers = [...arr1, ...arr2]
//     let up = [...numbers].sort((a, b) => a - b)
//     let down = [...numbers].sort((a, b) => b - a)
//     let strings = Array(numbers.length).fill(str)
//     return [up, down, strings]
// }

// console.log(sortArray([1, 10], [2, 3, 4], 'nodejs'));

//4-masala
// function numberSplit(n) {
// return [Math.floor(n / 2), Math.ceil(n / 2)]
// }

// console.log(numberSplit(4));
// console.log(numberSplit(10));
// console.log(numberSplit(11));
// console.log(numberSplit(-9)); \

//5-masala
// function sortByLength(arr) {
// return arr.sort((a, b) => a.length - b.length)
// }

// console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
// console.log(sortByLength(["apple", "pie", "shortcake"]));

//6-masala
// function juftArray(arr) {
// let juft = []
// for (const element of arr) {
//     if (element % 2 === 0) {
//         juft.push(element * 2)
//         juft.sort((a, b) => a - b)
//     }
// }
// return juft
// }

// console.log(juftArray([10, 2, 9, 5, 1, 3, 6, 4, 8]));

//7-masala
// function reverseImage(arr1) {
//   let reverse = arr1.reverse();
//   let result = [];
//   for (const element of reverse) {
//     element.reverse();
//   }
//   return reverse;
// }

// console.log(
//   reverseImage([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

//8-masala
// function changeNumbertoString(a, b) {
// let result = []
// let characters = {
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five"
// }
// for (let i = a; i <= b; i++) {
//     result.push(characters[i])
// }
// return result
// }

// console.log(changeNumbertoString(2, 4));

//9-masala
// function addToArray(n) {
// let numbers = []
// for (let i = 1; i <= n; i++) {
//     numbers.push(i)
// }
// let result = []
// for (let i = 0; i < numbers.length; i+= 3) {
//     result.push(numbers.slice(i, i + 3))
// }
// return result
// }

// console.log(addToArray(10));
