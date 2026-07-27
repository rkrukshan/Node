const name = "Rukshan";
console.log(name);

const greet = function () {
  console.log("Hi dude");
};

greet();

const greet2 = () => {
  console.log("Hi friend");
};

greet2();

const times = () => {
  setTimeout(() => {
    console.log("Hii");
  }, 1000);
};

times();

const greet3 = () => {
  setTimeout(() => {
    console.log("Hi bro");
  }, 2000);
};

greet3();

const path = require("path");
const os = require("os");

const { currentDate, year, profilePath } = require("./logger");
const { add, sub, multiple } = require("./mathOpertions");

console.log(add(20, 100));
console.log(sub(150, 50));
console.log(multiple(20, 5));

console.log(currentDate(), year());

console.log(__filename);
console.log(__dirname);

console.log(path.parse(__filename));
console.log(path.parse(__dirname));

console.log(profilePath);

if (os.platform() === "win32") {
  console.log("Windows");
  console.log("Total Memory:", os.totalmem());
  console.log("Free Memory :", os.freemem());
} else if (os.platform() === "darwin") {
  console.log("Mac");
} else {
  console.log("Linux/Other");
}
