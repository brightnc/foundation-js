function greeting(name) {
  if (name == undefined || name === "") {
    console.log("bad input!!");
  } else {
    console.log("Hello world" + name);
  }
}

greeting(10);
