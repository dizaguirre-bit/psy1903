alert("In this experiment we will measure your response time. You will be shown a series of simple math equations. Answer these equations as quickly and accurately as you can.");
let start = Date.now();
let math = Math.floor(Math.random() * 10) + 1
let math2 = Math.floor(Math.random() * 10) + 1
let answer = prompt("What is " + math + " + " + math2 + "?");
let end = Date.now();
let responseTime = (end - start) / 1000;
alert("You answered " + answer + " in " + responseTime + " seconds");
start = Date.now();
math = Math.floor(Math.random() * 10) + 1
math2 = Math.floor(Math.random() * 10) + 1
answer = prompt("What is " + math + " + " + math2 + "?");
end = Date.now();
responseTime = (end - start) / 1000;
alert("You answered " + answer + " in " + responseTime + " seconds");
start = Date.now();
math = Math.floor(Math.random() * 10) + 1
math2 = Math.floor(Math.random() * 10) + 1
answer = prompt("What is " + math + " + " + math2 + "?");
end = Date.now();
responseTime = (end - start) / 1000;
alert("You answered " + answer + " in " + responseTime + " seconds");
alert("Thank you for your participation!");