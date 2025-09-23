// function celsiusToFahrenheit(celsius) {
//     let celsiusToFahrenheit = (celsius * 1.8) + 32
//     return celsiusToFahrenheit
// }
// console.log(celsiusToFahrenheit(10)); // Expected output: 50
// console.log(celsiusToFahrenheit(-5)); // Expected output: 23

// function convertTemp(temp, convertTo) {
//     if (convertTo == 'c') {
//         let convertTemp = (temp * 1.8) + 32;
//         return convertTemp
//     }

//     else if (convertTo == 'f') {
//         let convertTemp = (temp - 32) / 1.8;
//         return convertTemp
//     }
// }

// console.log(convertTemp(10, 'c')); // Expected output: -12.222222222222221
// console.log(convertTemp(10, 'f')); // Expected output: 50

// let getWordLength = [];
// function getWordLengths(words) {

//     for (let word of words) {
//         getWordLength.push(word.length)
//     }
//     return getWordLength
// }

// let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];
// console.log(getWordLengths(words)); // Expected output: [5, 6, 6, 4, 5]

// function getLongestWord(words) {
//     let longestWord = ""

//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord
// }

// let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];
// console.log(getLongestWord(words)); // Expected output: banana

// function getOddNumbers(numbers) {
//     let results = [];
//     for (let number of numbers) {
//         if (number % 2 != 0) {
//             results.push(number);
//         }
//     }
//     return (results)
// }
// console.log(getOddNumbers([1, 2, 3, 4, 5])); // Expected output: [1, 3, 5]
// console.log(getOddNumbers([12, 45, 10, 11, 61])); // Expected output: [45, 11, 61]

function filterNumbers(numbers, evenOrOdd) {
    let results = [];
    for (let number of numbers) {
        if (evenOrOdd == 'even') {
            if (number % 2 == 0) {
                results.push(number);
            }
        }
        else if (evenOrOdd == 'odd') {
            if (number % 2 != 0) {
                results.push(number);
            }
        }
    }
    return (results)
}

console.log(filterNumbers([1, 2, 3, 4, 5], 'even')); // Expected output: [2, 4]
console.log(filterNumbers([1, 2, 3, 4, 5], 'odd')); // Expected output: [1, 3, 5]

console.log(filterNumbers([45, 10, 11, 61], 'even')); // Expected output: [10]
console.log(filterNumbers([45, 10, 11, 61], 'odd')); // Expected output: [45, 11, 61]