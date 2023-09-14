const person = {
  name: "John",
  age: 20,
  pet: {
    kind: "Rabbit",
    age: 2,
  },
  sayHello: function () {
    console.log(`Hello ${this.name}`);
  },
};

const keyName = "name";

// console.log("Name: ", person[keyName]);
// console.log("Name: ", person.name);
// person.sayHello();

//* Review Reference Type

const person2 = person;

person2.name = "Bright";

// console.log("person1 >>> ", person);
// console.log("person1 >>> ", person2);

//* Array of object: data from fetching data

const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johnny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
    pet: "cat",
  },
];

data.forEach((item, idx) => {
  console.log(
    `Person: ${idx + 1} \n Name: ${item.name} \n Age: ${item.age} \n Job: ${
      item.job
    } \n------------------`
  );
});
