function add(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiple(a, b) {
  return a * b;
}

module.exports = {
  add,
  sub: subtraction,
  multiple
};

console.log(module);
