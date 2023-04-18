const min = 1;
const maxX = 100;
const maxY = 50;

let x = Math.floor(Math.random() * (maxX - min + 1)) + min;
let y = Math.floor(Math.random() * (maxY - min + 1)) + min;

const sumOutput = `${x} + ${y} = ${x + y}`;
const differenceOutput = `${x} - ${y} = ${x - y}`;
const productOutput = `${x} * ${y} = ${x * y}`;
const quotientOutput = `${x} / ${y} = ${x / y}`;
const rmOutput = `${x} % ${y} = ${x % y}`;


console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);