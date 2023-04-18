// function getCelsius(degrees) {
// 	return (degrees - 32) * 5 / 9;
// }

// const getCelsius = (degrees) => {
// 	return (degrees - 32) * 5 / 9;
// }

const getCelsius = degrees => Math.floor((degrees - 32) * 5 / 9);

// console.log(`The temperature in Celsius is ${getCelsius(100)}\xB0C`);

const minMax = (numbers) => ({
	min: Math.min(...numbers),
	max: Math.max(...numbers)
});

// console.log(minMax([123,34534,56754,345343,465456,23423]));

(function (length, width) {
	console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}`);
})(10, 5);

