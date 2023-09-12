function greeting(name) {
  if (name == undefined || name === "") {
    console.log("bad input!!");
  } else {
    console.log("Hello world" + name);
  }
}

//greeting(10);

const a = "Helloworld";

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
