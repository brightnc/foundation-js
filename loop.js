function normalLoop() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

//normalLoop();

function reverseLoop() {
  for (let i = 3; i >= 0; i--) {
    console.log(i);
  }
}

//reverseLoop();

const arr = ["Tokyo", "Paris", "London", "Bali"];

function loopThroughArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(arr[i]);
  }
}

function reverseLoopArray() {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

//loopThroughArray(arr);

// * Break keyword
function breakKeyword(array) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "London") {
      break;
    }
    console.log(arr[i]);
  }
}

//breakKeyword(arr);

// Continue keyword
function continueKeyword(array) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "London") {
      continue;
    }
    console.log(arr[i]);
  }
}

//continueKeyword(arr);

function whileLoop() {
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }

  let count = 1;
  while (count < 100) {
    console.log(count);
    count = count + 2;
  }
  console.log(count);
}

//whileLoop();

// * Exercise:
// * Write a code that will loop from 0 to 15. For each loop, it will check if the current index number is odd or even, and display a message to the console.

// * Example Output:
// * > 0 is even
// * > 1 is odd
// * > 2 is even

// * > 15 is odd

function isEvenOrOddNumber() {
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
}
isEvenOrOddNumber();
