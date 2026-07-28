const path = require("path");

function currentDate() {
  return new Date().toTimeString();
}

function currentYear() {
  return new Date().getFullYear();
}



console.log(path.parse(__dirname));
console.log(path.parse(__filename));

const profilePath= path.join(__dirname,"uploads");
console.log(profilePath);



module.exports = {
  currentDate,
  year: currentYear,
  profilePath
};