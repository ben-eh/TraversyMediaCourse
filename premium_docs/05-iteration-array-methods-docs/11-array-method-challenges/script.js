const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const youngPeople = people
	.filter((property) => property.age <= 25)
	.map((obj) => {
		return {
			name: `${obj.firstName} ${obj.lastName}`,
			email: obj.email,
		};
	})
	
// console.log(youngPeople);

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveNumbersTotal = numbers
	.filter((number) => number > 0)
	.reduce((acc, curr) => {
		return acc + curr;
	}, 0);

// console.log(positiveNumbersTotal);

const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map((word) => {
	const firstLetter = word.charAt(0);
	const firstLetteCap = firstLetter.toUpperCase();
	const remainingLetters = word.slice(1);
	return firstLetteCap + remainingLetters;
})

console.log(capitalizedWords);

const multiplication = (num1, num2) => {
	return num1 * num2;
}

const numberSquared = (x) => {
	return x*x;
}