console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const myTitle = "title";
let myText = "blablablabla";
let numberOfLikes = 2;
const userName = "Pablo";
let isReported = true;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log("this is a title: ", myTitle);
console.log("this is text: ", myText);
console.log("number of likes: ", numberOfLikes);
console.log("user name: ", userName);
console.log("it is reported: ", isReported);

numberOfLikes++;

console.log("new number of likes: ", numberOfLikes);
// --^-- write your code here --^--
