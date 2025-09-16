/* // Identify elements on the page we will update
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

// Generate random numbers to display on page load
let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;

// Update elements on the page
num1.innerHTML = randomNum1;
num2.innerHTML = randomNum2

// Listen for form to be submitted
form.addEventListener('submit', function (event) {

}); */

/* let response = prompt('What is your name?');
let count = response.length;
console.log(count);
let firstLetter = response.charAt(0);
console.log(firstLetter);
let lastLetter = response.charAt(count - 1);
console.log(lastLetter); */

/* let age = 20;
if (age == 25) {
    console.log("Age is 25");
}

/* let a = 5;
let b = 10;
console.log(a > 3 && b < 15); */

/* let over18 = false;
let hasGuardianApproval = true;
console.log(over18 || hasGuardianApproval);  */

/* let count = 8;
console.log(count % 2 == 0); */

/* // Generate variables
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let correctAnswer = (num1 + num2)

// Generate prompt
let response = prompt('What is ' + num1 + ' + ' + num2 + '?');

// Generate feedback after answer is given
let feedback = '';

if (response == correctAnswer) {
    feedback = 'Correct!';
} else if (response == correctAnswer - 1 || response == correctAnswer + 1) {
    feedback = 'You were close!';
} else {
    feedback = 'Incorrect.';
}

alert(feedback + ' The expected answer is ' + correctAnswer + '.'); */

/* let age = prompt('How old are you?');
if (age < 12) {
    alert('Child');
}
else if (age < 18 && age >= 12) {
    alert('Teenager');
}
else {
    alert('Adult');
} */

/* let response = prompt("Please enter a whole number");
if (response % 2 == 0) {
    alert("The number you entered was even");
}
else {
    alert("The number you entered was odd");
} */

// Generating variables for use
alert("In this experiment we will measure your response time. You will be shown a series of simple math equations. Answer these equations as quickly and accurately as you can.");
let start = Date.now();
let math1 = Math.floor(Math.random() * 10) + 1
let math2 = Math.floor(Math.random() * 10) + 1
let correctAnswer = (math1 + math2)
let correctResponse = "You got it CORRECT"
let incorrectResponse = "You got it INCORRECT"
// Generate Question 1
let answer = prompt("What is " + math1 + " + " + math2 + "?");
let end = Date.now();
let responseTime = (end - start) / 1000;

// Generate alert for Question 1 based on response
if (answer == correctAnswer) {
    alert("You answered " + answer + " in " + responseTime + " seconds. " + correctResponse);
} else {
    alert("You answered " + answer + " in " + responseTime + " seconds. " + incorrectResponse);
}

// Generate Question 2
start = Date.now();
math = Math.floor(Math.random() * 10) + 1
math2 = Math.floor(Math.random() * 10) + 1
correctAnswer = (math1 + math2)
answer = prompt("What is " + math1 + " + " + math2 + "?");
end = Date.now();
responseTime = (end - start) / 1000;


// Generate alert for Question 2 based on response
if (answer == correctAnswer) {
    alert("You answered " + answer + " in " + responseTime + " seconds. " + correctResponse);
} else {
    alert("You answered " + answer + " in " + responseTime + " seconds. " + incorrectResponse);
}

// Generate Question 3
start = Date.now();
math = Math.floor(Math.random() * 10) + 1
math2 = Math.floor(Math.random() * 10) + 1
correctAnswer = (math1 + math2)
answer = prompt("What is " + math1 + " + " + math2 + "?");
end = Date.now();
responseTime = (end - start) / 1000;
// Generate alert for Question 3 based on response
if (answer == correctAnswer) {
    alert("You answered " + answer + " in " + responseTime + " seconds. " + correctResponse);
} else {
    alert("You answered " + answer + " in " + responseTime + " seconds. " + incorrectResponse);
}
// Closing alert
alert("Thank you for your participation!");

