const callMe = () => {
  console.log("hello from callbackFn");
};

const greeting = (callbackFn) => {
  console.log("hello world");
  callbackFn();
};

//greeting(callMe);

//* Anonymous Function //*

greeting(() => {
  console.log("Anonymous Function");
});

const greeting2 = (name, callback) => {
  console.log("hello world");
  callback(name);
};

greeting2("Bright", (name) => {
  console.log("hello from " + name);
});

function calculator(operand1, operand2, operator) {
  return operator(operand1, operand2);
}

function add(operand1, operand2) {
  return operand1 + operand2;
}

function divide(operand1, operand2) {
  return operand1 / operand2;
}

const value = calculator(20, 2, divide);
//console.log(value);

const originalArr = [1, 2, 3, 4, 5];

const loopThroughArrayV2 = (arr, callbackFn) => {
  for (let i = 0; i < arr.length; i++) {
    callbackFn(arr[i]);
  }
};

// //loopThroughArrayV2(originalArr, (item) => {
//   console.log(item);
// });

const mapArr = (arr, callbackFn) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const newItem = callbackFn(arr[i]);
    newArray.push(newItem);
  }

  return newArray;
};

const newMapArr = mapArr(originalArr, (item) => {
  return item * 2;
});

// console.log(newMapArr);

// * Exercise: Create a function called "filterArray" to filter only positive number
// * 1. This function receive 2 parameters, arr and cb.
// * 2. cb function must receive 1 parameter, which is each item from the array
// * 3. cb must return only boolean, if it return true, keep that item, otherwise, don't keep it.
// * 4. filterArray must return a new array that keeps all true items

function filterArray(array, callbackFn) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const isKeeping = callbackFn(array[i]);
    if (isKeeping) {
      result.push(array[i]);
    }
  }
  return result;
}

const beforeFilter = [-1, 3, 20, -24];

const afterFilter = filterArray(beforeFilter, (item) => {
  return item > 0;
});

console.log(afterFilter);
