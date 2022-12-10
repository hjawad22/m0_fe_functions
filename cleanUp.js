// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit
 

// EX 1: 
function askQuestion() {
  console.log("Hello, what is your name?");
}

askQuestion();
// I added a space to make the syntax look cleaner.

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third;
console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
// I added semicolones to make the syntax look uniform.

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();
// I fixed the misspelling of the word function and addes a space to clean it up.

//  EX 4:
function average(num1, num2) {
var sum = num1 + num2;
var avg = sum / 2;
 console.log(`the average is: ${avg}.`);
}

average(2,4);
// I called the function to make the function run and fixed 
// the positioning of the last grave to add the period inside of it.