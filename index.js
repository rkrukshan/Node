const fs = require("fs");

const data = fs.readdirSync("./");

console.log(data);

fs.readdir("./a", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.readdir("./a", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// fs.mkdir("myFolder", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });

// fs.mkdir("myFolder/folder", (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }

// })

// fs.mkdir("myFolder/folder/folder1", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });



const data1 = fs.readdirSync("myFolder");
console.log(data1);
