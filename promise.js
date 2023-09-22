let data = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (false) {
      resolve("Data found !!!");
    }

    reject("Data not found !!!");
  }, 3000);
});

console.log(data);

data
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("done");
  });
