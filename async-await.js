const fetchData = () => Promise.reject("data not found !!");

const getData = async () => {
  console.log("inside getData()");
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("done");
  }
};
// console.log("start main");
// getData();
// console.log("end main");

const fetchData1 = () => Promise.resolve("data1");
const fetchData2 = () => Promise.resolve("data2");
const fetchData3 = () => Promise.resolve("data3");

//* Call Back Hell

// fetchData1()
//   .then((res) => {
//     console.log(res);
//     fetchData2()
//       .then((res) => {
//         console.log(res);
//         fetchData3()
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((err) => {});
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* Async Await

const getMultipleData = async () => {
  try {
    const result1 = await fetchData1();
    const result2 = await fetchData2();
    const result3 = await fetchData3();

    console.log(result1);
    console.log(result2);
    console.log(result3);
  } catch (err) {
    console.log(err);
  }
};

getMultipleData();
