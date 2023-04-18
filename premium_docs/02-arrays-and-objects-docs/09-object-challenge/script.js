const library = [
	{
	 title: "East of Eden",
	 author: "John Steinbeck",
	 status: {
		 own: true,
		 reading: false,
		 read: false
	 }
 },
 {
	 title: "Catch in the Rye",
	 author: "J.D. Salinger",
	 status: {
		 own: true,
		 reading: false,
		 read: false
	 }
 },
 {
	 title: "The Handmaid's Tale",
	 author: "Margaret Atwood",
	 status: {
		 own: true,
		 reading: false,
		 read: false
	 }
 }
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

const libraryString = JSON.stringify(library);

console.log(libraryString);