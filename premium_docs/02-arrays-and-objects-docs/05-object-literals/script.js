let x;

const person = {
	firstName: 'John',
	'Last Name': 'Doe',
	age: 30,
	isAdmin: true,
	address: {
		street: '123 Main St',
		city: 'Boston',
		state: 'MA'
	},
	hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

// person.name = 'Jane Doe';
person['isAdmin'] = false;

delete person.age;

person.hasChildren = true;

person.greet = function() {
	console.log(`Hello, my name is ${this.firstName} ${this['Last Name']}`);
}

person.greet();

x = person;

console.log(x);