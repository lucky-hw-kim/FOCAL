const args = process.argv.slice(2);
const num1 = parseInt(args[0]);
const num2 = parseInt(args[1]);

let sum = function(num1, num2) {
  return num1 + num2;
};

console.log(sum(num1, num2));