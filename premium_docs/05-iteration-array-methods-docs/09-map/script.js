const companies = [
	{name: 'Company One', category: 'Finance', start: 1981, end: 2004},
	{name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
	{name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
	{name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
	{name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
	{name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
	{name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
	{name: 'Company Eight', category: 'Technology', start: 2011, end: 2011},
	{name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
]

const numbers = [1,2,3,4,5];

const retailCompanies = companies.filter((company) => company.category == 'Retail');

// console.log(retailCompanies);

const millenialCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005);

// console.log(millenialCompanies);

const tenYearCompanies = companies.filter( (company) => (company.end - company.start >= 10) );

// console.log(tenYearCompanies);

const companyNames = companies.map((object) => object.name);

// console.log(companyNames);

const simplerCompanies = companies.map((company) => {
	return {
		name: company.name,
		category: company.category
	}
});

// console.log(simplerCompanies);

const companyYears = companies.map((company) => {
	return {
		name: company.name,
		years: company.end - company.start
	}
});

// console.log(companyYears);

const cart = [
	{id: 1, name: 'Product 1', price: 130},
	{id: 2, name: 'Product 2', price: 230},
	{id: 3, name: 'Product 3', price: 70},
]

const cartTotal = cart.reduce((accumulator, currentValue) => {
	return accumulator += currentValue.price;
}, 0);

console.log(cartTotal);