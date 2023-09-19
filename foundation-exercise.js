//* 1. mapRevertSign(arr) takes in an array of numbers, and returns a new array of numbers containing opposite signs of the original array.
//const arr = [1, -4, 2, 0];

const mapRevertSign = (array) => {
  return array.map((item) => {
    return 0 - item;
  });
};

//console.log(mapRevertSign(arr));

//* 2. reverse(arr) returns a new array which is arr reversed. *** You are not allowed to use Array.reverse method.

//const arr = [1, 2, 3, 4, 5];

const reverse = (arr) => {
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
};

//console.log(reverse(arr));

//* 3. isMember(mem, arr) returns a boolean indicating whether mem is a member of arr *** Do not use Array helper methods - use a simple for loop

const isMember = (candidate, array) => {
  for (let i = 0; i < array.length; i++) {
    if (candidate === array[i]) {
      return true;
    }
  }
  return false;
};

//console.log(isMember(5, [1, 3, 7, 12])); // false

// console.log(isMember("john", ["jane", "jim", "john"])); // true

//* 4. unique(arr) takes in an array of numbers arr and returns a new array whose elements are unique. *** You can use isMember implemented above.

//const arr = [10, 20, 10, 20, 30, 50, 60, 100];
const unique = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!isMember(arr[i], result)) {
      result.push(arr[i]);
    }
  }

  return result;
};

//console.log(unique(arr)); // [10, 20, 30, 50, 60, 100]

//* 5. draw(n) takes in a number n, and prints the stars (*) into the console in this pattern:

//* Hint: Use nested loop, using assignment operator “+=”, and “\n” which is new line character (read “back-slash-N”)

const draw = (n) => {
  let stars = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      stars += "*";
    }
    stars += "\n";
  }

  console.log(stars);
};

//draw(5);

//* 6. Re-write draw(n) as drawNg(n) (-ng suffix is usually used for next-gen) Like draw(n), but this time drawNg(n) prints this pattern:

//* Hint: Use nested loop, using assignment operator “+=”, and “\n” which is new line character (read “back-slash-N”)

const drawNg = (n) => {
  if (n < 0) {
    return;
  }
  let stars = "";
  for (let i = 0; i < n; i++) {
    stars += "*";
    console.log(stars);
  }
};

//drawNg(6);

//* 7. mutual(arr1, arr2) returns a new array containing all mutual members of arr1 and arr2

const class1 = ["Alice", "Bob", "John", "Jane"];
const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

const mutual = (array1, array2) => {
  const newArr = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        newArr.push(array1[i]);
      }
    }
  }
  const result = unique(newArr);
  return result;
};

//console.log(mutual(class1, class2)); // ["John", "Bob"]

//* 8. fizzBuzz(n) iterates over inclusive range [1, n], and for each element in the range,
//* fizzBuzz(n) prints Fizz if the element is divisible by 3
//* Buzz if the element is divisible by 5
//* and FizzBuzz if the element is divisible by 3 and 5

//* If no conditions are met, fizzBuzz(n) prints the element.

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

//fizzBuzz(20);

//* 9. gcd(a, b) returns greatest common divisor (GCD / หรม.) between the pair a, b

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

// console.log(gcd(10, 15)); // 5
// console.log(gcd(18, 12)); // 6
// console.log(gcd(3, 2)); // 1

//* 10. filterLt(n, arr) takes in an a number n and an array of numbers arr,
//* and returns a new array containing all elements of arr that is lesser than (lt) n.

//* Do not use Array helper methods - use a simple for loop

// const arr = [120, 112, 111, 130, 169, 101];

const filterLt = (n, array) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < n) {
      result.push(array[i]);
    }
  }
  return result;
};

// console.log(filterLt(0, arr)); // []
// console.log(filterLt(112, arr)); // [111, 101]

//* 11. filterGt(n, arr) performs similar business logic to filterLt(n, arr) above,
//* but instead of doing a lesser-than test, it does a greater-than test

//* Do not use Array helper methods - use a simple for loop

// const arr = [120, 112, 111, 130, 169, 101];

const filterGt = (n, array) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > n) {
      result.push(array[i]);
    }
  }
  return result;
};

// console.log(filterGt(0, arr)); // [120, 112, 111, 130, 169, 101]
// console.log(filterGt(112, arr)); // [120, 130, 169]

//* 12. Implement a programmable logic to compute compounded return

//* Compounded returns are an investment strategy in which the interest income earned from the previous period is also invested into the current period.

//* This is like how we earn interests from savings accounts.

//* The interface (function signature) to this logic should be as simple as compoundedReturn(amount, interest, n)
//* where amount is the amount of fund invested in the 1st period, interest is an interest percentage per period,
//* and n is the number of periods of the investment.

const compoundedReturn = (amount, interest, n) => {
  return Math.round(amount * (1 + interest / 100) ** n);
};

// console.log(compoundedReturn(100, 1, 1)); // 101
// console.log(compoundedReturn(100, 10, 1)); // 110
// console.log(compoundedReturn(100, 10, 2)); // 121

//* 13. mean(arr) returns the mean average value of arr dataset (represented as an array).

//* If any one of arr members are of non-number type, mean(arr) returns null

const mean = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
    } else {
      return null;
    }
  }
  return sum / array.length;
};

// console.log(mean([1, 2, 3])); // 2
// console.log(mean([1, "foo", 3])); // null

//* 14. mid(arr) returns the array containing middle element(s) of array arr.

//* If the array length is an even number, mid returns the 2 middle elements.

const mid = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const result = [];
  const middle = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    result.push(array[middle - 1], array[middle]);
  } else {
    result.push(array[middle]);
  }

  return result;
};

// console.log(mid(["john"])); // ["john"]
// console.log(mid(["foo", "bar", "baz"])); // ["bar"]
// console.log(mid([1, 2, 3, 4])); // [2, 3]

//* 15. Try learning Array.sort method (function) with this snippet:

//* const arr = [3, 2, 1, 12, 13, 11]
//* arr.sort()

//* console.log(arr) // [1, 11, 12, 13, 2, 3]
//* The sort method does now work as we expect. Instead of sorting by numeric value,
//* it seems the sort method sorts elements as strings (hence it did not produce [1, 2, 3, 11, 12, 13]).
//* After learning the root cause, try fixing this problem/implementing on your own.

//* Hint: a callback function can be sent to Array.sort

const arrSort = [3, 2, 1, 12, 13, 11];
arrSort.sort((a, b) => {
  return a - b;
});

// console.log(arrSort); // [1, 2, 3, 11, 12, 13]

//* 16. median(arr) returns the statistical median from the dataset arr (represented as an array).

//* A dataset's median is the element at the middle of the sorted list. You are allowed to use Array.sort method for this implementation

//* Hint: You can use mid() and mean() implemented above to solve this problem.

const median = (array) => {
  array.sort((a, b) => {
    return a - b;
  });

  const midArray = mid(array);

  if (midArray.length === 1) {
    return midArray[0];
  } else {
    return mean(midArray);
  }
};

// console.log(median([2, 1, 5, 3, 4])); // 3
// console.log(median([1, 2, 2, 3, 4, 7, 9])); // 3
// console.log(median([1, 2, 3, 4, 5, 6, 8, 9])); // 4.5

//* 17. initArr(val, len) returns an array of length len with all members initialized to val.

const initArr = (val, len) => {
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push(val);
  }
  return result;
};

// console.log(initArr(0, 5)); // [0, 0, 0, 0, 0]
// console.log(initArr(1, 7)); // [1, 1, 1, 1, 1, 1, 1]

//* 18. flatMap(arr) takes in an array of arrays, and returns the flattened array.
// const array = [
//   [1, 2, 3],
//   [100, 200],
//   [10, 20],
// ];
const flatMap = (array) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      result.push(array[i][j]);
    }
  }

  return result;
};

// console.log(flatMap(array)); // [1, 2, 3, 100, 200, 10, 20]

//* 19. mapMean(arr) takes in an array of arrays, and returns an array of numbers whose element at index i maps to the mean average value of arr[i].

// * You are allowed to use mean(arr) written above.

const mapMean = (array) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const meanValue = mean(array[i]);
    result.push(meanValue);
  }

  return result;
};

// console.log(mapMean(array)); // [2, 150, 15]

//* 20. fib(n) prints the Fibonacci series up to n terms.

//* The series look like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

const fib = (n) => {
  // if (n <= 2) {
  //   return 1;
  // }

  // return fib(n - 1) + fib(n - 2);

  const fibArray = [0, 1];
  if (n < 1) {
    return 0;
  }
  for (let i = 2; i <= n; i++) {
    fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
  }
  return fibArray;
};

// console.log(fib(10));

//* 21. toBytes(s) takes in a string s and returns an array of ASCII bytes formed by s.

//* If a character in s is invalid ASCII, the character is omitted from the returned array.

//* Hint: JavaScript strings have method s.charCodeAt(i) which returns the ASCII code of the character at index i of string s

// const bar = "Bar";
// const foo = "Foo";
// const fooFire = "Foo🔥";

const toBytes = (s) => {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) <= 255) {
      result.push(s.charCodeAt(i));
    }
  }
  return result;
};

// console.log(toBytes(bar)); // [ 66, 97, 114 ]
// console.log(toBytes(foo)); // [ 70, 111, 111 ]
// console.log(toBytes(fooFire)); // [ 70, 111, 111 ] because the emoji is invalid ASCII

/*
	|--------------------------------------------------------------------------
	| Medium
	|--------------------------------------------------------------------------
	|
*/

//* 1. maxNegMinPos(arr) takes in an array arr, and it prints the max negative value (maxNeg) as well as the min positive value (minPos).

const array = [12, -13, 14, 4, 2, -1, -18];

const maxNegMinPos = (array) => {
  array.sort((a, b) => {
    return a - b;
  });

  const negNumber = [];
  const posNumber = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      posNumber.push(array[i]);
    } else {
      negNumber.push(array[i]);
    }
  }

  const negMax = negNumber[negNumber.length - 1];
  const posMin = posNumber[0];
  console.log("MaxNeg is", negMax);
  console.log("MinPos is", posMin);
};

//maxNegMinPos(array);

//* 2. prime(n) returns an array of first n prime numbers

//* Hint: keep a list of prime numbers, and check subsequent number iterations against the list.

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = (n) => {
  const result = [];

  for (let i = 0; i >= 0; i++) {
    if (isPrime(i)) {
      result.push(i);
    }

    if (result.length === n) {
      return result;
    }
  }
};

// console.log(prime(10));

//* 3. drawDown(chart) returns the biggest downward movement within the chart points

//* Where chart is points in a chart, represented as an array of numbers: [110, 105, 95, 9, 80, 17, 120, 115, 11]

//* Hint: you must keep states

const chart = [115, 105, 95, 9, 80, 17, 120, 115, 11];

const drawDown = (chart) => {
  let max = 0;
  let low = 0;
  let diff = 0;

  for (let i = 0; i < chart.length; i++) {
    let isNewHigh = false;
    if (i === 0) {
      max = chart[i];
      low = chart[i];
      continue;
    }

    if (chart[i] > max) {
      max = chart[i];
      isNewHigh = true;
      low = max;
    }
    if (chart[i] < low) {
      low = chart[i];
    }
    if (!isNewHigh) {
      let newDiff = max - low;

      if (newDiff > diff) {
        diff = newDiff;
      }
    }
  }

  return diff;
};

// console.log(drawDown(chart)); // 109

/*
	|--------------------------------------------------------------------------
	| CHALLENGES
	|--------------------------------------------------------------------------
	|
*/

//* 1. summarize(text, trail, len) returns the shortest preview of text.

//* If text fits within len, then summarize returns the whole text.

//*  If text is longer than len, then summarize will truncate text and appends trail (e.g.  ... with a whitespace at the front) to the return string.

//* The whole return string must fit into len, i.e. its length must not exceed len.

//* The returned text must contain only whole words (i.e. words are separated by whitespace  ). Partial words are not allowed.

//* If len is smaller than 3, and text does not fit len, summarize returns an empty string "".

const articleCleverse =
  "I am from Cleverse Academy! Today, I’m here to teach you some JavaScript programming";

const summarize = (text, trail, len) => {
  if (len < 3) {
    return "";
  }
  const textArray = text.split(" ");
  let length = len - trail.length;
  const result = [];
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].length < length) {
      length = length - textArray[i].length;
      result.push(textArray[i]);
    }
    if (textArray[i].length > length) {
      break;
    }
  }
  result.push(trail);
  const resultText = result.join(" ");
  return resultText;
};

// console.log(summarize(articleCleverse, " ...", 30)); // "I am from Cleverse Academy! ..."

const articleFoo = "Good morning ladies and gentlemen";

// console.log(summarize(articleFoo, " ...", 2)); // ""
// console.log(summarize(articleFoo, " ...", 10)); // "Good ..."
// console.log(summarize(articleFoo, " ...", 20)); // "Good morning ..."
// console.log(summarize(articleFoo, " ...", 25)); //* "Good morning ladies ..." "Good morning ladies and ..."

//* 2. mode(arr) returns the statistical mode from the dataset arr (represented as an array).

//* A dataset's mode is the value which appears most frequently in a dataset. If none is found, or if there are no clear winner, mode(arr) returns null

//* Hint: It can be done in 2 ways: the first is by using a HashMap, the second is by using an Object. You may need to research how to use HashMap in JavaScript.

const mode = (array) => {
  const map = {};
  let temp = 0;
  let result = null;
  const len = array.length;
  for (let i = 0; i < len; i++) {
    if (!map[array[i]]) {
      map[array[i]] = 1;
    }
    map[array[i]]++;
  }
  for (const [key, value] of Object.entries(map)) {
    // there are no clear winner, mode(arr) returns null
    if (value !== 0 && value === temp) {
      return null;
    }
    if (value > temp) {
      temp = value;
      result = key;
    }
  }
  return result;
};

// console.log(mode([1, 2, 1, 4, 5, 6, 2, 1])); // 1
// console.log(mode([1, 2, 1, 4, 5, 6, 2, 1, 2, 2, 2])); //2
// console.log(mode([1, 2, 1, 1, 2, 2, 2, 4, 5, 6, 1])); // null
// console.log(mode([2, 5, 2, 4, 5])); // null

// const testMap = { num: 10 };
// console.log(testMap["num"]);

//* 2.1 mapMode(arr) takes in an array of arrays, and returns an array of numbers whose element at index i maps to the statistical mode of arr[i].

//* You are allowed to use mode(arr) written above.

const mapMode = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(mode(array[i]));
  }
  return result;
};

const arr = [
  [1, 2, 3, 1],
  [100, 200],
  [10, 20],
];
// console.log(mapMode(arr)); // [1, null, null]

//* 3. transpose(bits, w, h) transposes an array bits into arrays of arrays, based on the value of w, h, and to some extent bits.

const transpose = (bits, w, h) => {
  const result = [];
  let count = 0;
  for (let i = 0; i < h; i++) {
    const temp = [];
    for (let j = 0; j < w; j++) {
      temp.push(bits[count]);
      count++;
    }
    result.push(temp);
  }
  return result;
};

const imageBytes = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];
// console.log(transpose(imageBytes, 8, 2));
// [
//   [1, 0, 1, 0, 0, 0, 0, 0], // => the 1st row of pixels of imageBytes
//   [1, 0, 1, 0, 1, 1, 1, 1], // => the 2nd row of pixels of imageBytes
// ];

//* 4. Related to transpose(arr, w, h) above transposable(arr, w, h) returns a boolean,
//* indicating whether the array arr could be transposed with w and h. It is considered transposable
//* if the resulting 2D array can form a rectangle (all rows have uniform length).
const transposable = (arr, w, h) => {
  if (arr.length % (w * h) === 0) {
    return true;
  }
  return false;
};
const image = [1, 0, 1, 0, 1, 1]; // len = 6
// console.log(transposable(image, 2, 3)); // true
// console.log(transposable(image, 6, 1)); // true
// console.log(transposable(image, 4, 2)); // false

//* 5. markdownToHTML(md) takes in a Markdown string md and returns a HTML string parsed from md.

//* You can just parse the header tags (<h1>, <h2>, and so on) and the paragraph tag <p> and ignore the rest of Markdown standard.

//* Hint: JavaScript strings have method s.startsWith(p) which returns a boolean indicating whether s is prefixed with p

const markdownToHTML = (md) => {
  const textArray = md.split("\n");
  const result = [];
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] === "") {
      continue;
    }
    if (textArray[i].startsWith("# ")) {
      textArray[i] = textArray[i].replace("# ", "<h1>");
      textArray[i] += "</h1>";
      result.push(textArray[i]);
    } else if (textArray[i].startsWith("## ")) {
      textArray[i] = textArray[i].replace("## ", "<h2>");
      textArray[i] += "</h2>";
      result.push(textArray[i]);
    } else {
      textArray[i] = "<p>" + textArray[i] + "</p>";
      result.push(textArray[i]);
    }
  }

  return result.join("\n");
};

const md = `
# This is H1

## This is H2

This is a paragraph
`;

// console.log(markdownToHTML(md));
