// console.log('Hello from week 4!')

// let response = 10;
// let responseTime = 2.33;
// let feedback = 'correct';

// console.log('You answered ' + response + ' in ' + responseTime + ' seconds. Your answer was ' + feedback);
// consolelog(`You answered ${response} in ${responseTime}. Your answer was ${feedback}.`);

// // Part 1: Functions
// let num1 = getRandomNumber(1, 10);
// let num2 = getRandomNumber(0, 100);

// console.log(num1)
// console.log(num2)

// displayRandomNumber();

// function getRandomNumber(min, max) {
//     let randomNumber = Math.floor(Math.random() * max) + min;
//     return randomNumber
// }

// function displayRandomNumber() {
//     alert(getRandomNumber(1, 10));
// }

// // An Array of Numbers
// let ages = [45, 23, 28, 35, 35];

// // An Array of Strings
// //              0        1        2     3
// let names = ['Alice', 'Jamal', 'Avi', 'Kyle'];
// names[1] = 'Bob';
// names.unshift('Sara');
// console.log(names)
// console.log(names[4]);

// // An Array can contain other Arrays
// let numbers = [1, 2, 3, [8, 9, 10]];

// // An Array of mixed data types
// let mixed = ['a', 'b', 1, 2, [true, false]];

// // Part 3: Loops
// let names = ['Alice', 'Jamal', 'Avi', 'Kyle'];

// let namesThatStartWithA = [];

// for (let name of names) {
//     if (name.charAt(0) == 'A') {
//         namesThatStartWithA.push(name);
//     }
// }
// console.log(namesThatStartWithA)

// Part 4: Numerical for loops
// let results = [];

// for (let i = 0; i < 3; i++) {
//     let start = Date.now();
//     let math1 = getRandomNumber(1, 10);
//     let math2 = getRandomNumber(1, 10);
//     let correctAnswer = (math1 + math2)
//     let correctResponse = "You got it CORRECT"
//     let incorrectResponse = "You got it INCORRECT"
//     let answer = prompt(`What is ${math1} + ${math2}?`);
//     let end = Date.now();
//     let responseTime = (end - start) / 1000;
//     if (answer == correctAnswer) {
//         feedback = 'correct';
//     } else {
//         feedback = 'incorrect';
//     }
//     results.push([feedback, responseTime]);
//     alert(`You answered ${answer} (${feedback}) in ${responseTime} seconds.`);
// }


// function getRandomNumber(min, max) {
//     let randomNumber = Math.floor(Math.random() * max) + min;
//     return randomNumber
// }

// console.log(results);

// Part 5: Objects

// Arrays: Store multiple elements, accessed via numerical indexes
// let participantA = ['Alice', 21, true];

// let participantB = {
//     name: 'Alice',
//     age: 21,
//     consent: true
// }
// participantB.consent = false;
// participantB.startTime = '2:00pm';
// delete participantB.age;
// console.log(participantB)
// if (participantA[2]) {
//     // ...
// }

// if (participantB.consent) {
//     // ...
// }

// let person = {
//     // Strings
//     firstName: 'Elliot',
//     lastName: 'Brown',

//     // Number
//     age: 30,

//     // Array
//     hobbies: ['reading', 'gaming', 'hiking'],

//     // Nested Object
//     address: {
//         street: '324 Western Ave',
//         city: 'Cambridge',
//         zipCode: '02139'
//     },

//     // Functions
//     // Observe how the keyword *this* is used in functions to reference other properties within this object
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`;
//     },

//     greet: function () {
//         return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
//     },

//     getAddress: function () {
//         return `I live at ${this.address.street}, ${this.address.city} ${this.address.zipCode}`;
//     },

//     getHobbies: function () {
//         return `My hobbies include ${this.hobbies.join(', ')}`;
//     }
// };

// // Testing the functions, accessed via dot notation and invoked with parenthesis
// console.log(person.greet()); // Hello, my name is Elliot Brown and I am 30 years old.

// console.log(person.getAddress()); // I live at 324 Western Ave, Cambridge 02139
// console.log(person.getHobbies()); // My hobbies include reading, gaming, hiking

// // Testing the properties
// console.log(person.firstName); // Elliot
// console.log(person.age); // 30

// document.getElementById()
// console.log()

// // a method is a function that is defined within an object, a function is not within an object, anything that's not a function is a property

let results = [];

for (let i = 0; i < 3; i++) {
    let start = Date.now();
    let math1 = getRandomNumber(1, 10);
    let math2 = getRandomNumber(1, 10);
    let correctAnswer = (math1 + math2)
    let correctResponse = "You got it CORRECT"
    let incorrectResponse = "You got it INCORRECT"
    let answer = prompt(`What is ${math1} + ${math2}?`);
    let end = Date.now();
    let responseTime = (end - start) / 1000;
    if (answer == correctAnswer) {
        feedback = 'correct';
    } else {
        feedback = 'incorrect';
    }



    results.push({
        response: answer,
        answer: correctAnswer,
        feedback: feedback,
        time: responseTime
    });

    alert(`You answered ${answer} (${feedback}) in ${responseTime} seconds.`);
}

function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber
}

console.log(results);