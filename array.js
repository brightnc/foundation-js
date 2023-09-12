// * Exercise
// ? Create an array that contain 4 foods that you like. Then complete these following tasks.

// ? 1. Locate your most favorite food in the array. Print its array index to the console.
// ? 2. Add your 3 favorite desserts or fruits into that array. Print the result to the console.

// ? CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)

const foods = ["Pizza", "Hamburger", "French fries", "Popcorn"];

const favoriteFoodIndex = foods.indexOf("Pizza");

console.log("favorite food in index : " + favoriteFoodIndex);
//************************* Concat ************************************//
const favoriteFoodAndDesserts = foods.concat(
  "Cheesecake",
  "Chocolate brownie",
  "Tiramisu"
);
console.log("Original Array : " + foods);
console.log(`favoriteFoodAndDesserts with concat : ${favoriteFoodAndDesserts}`);

//************************* Push ************************************//

foods.push("Cheesecake", "Chocolate brownie", "Tiramisu");

console.log("favoriteFoodAndDesserts with push : " + foods);

//************************* Includes ************************************//
console.log(
  "favorite food is exist? :  " + foods.includes("Chocolate brownie")
);
