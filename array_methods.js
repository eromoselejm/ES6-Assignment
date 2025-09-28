const numbers = [1, 2, 3, 4, 5]; //creates an array

const doubled = numbers.map(num => num * 2); //map function modifies the values of a current array then passes it into a neww array
console.log(doubled); // [2, 4, 6, 8, 10]

const evenNumbers= numbers.filter(num => num % 2 === 0); // the filter functoin filters values of specific criteria from a current array then passes it into a new array
console.log(evenNumbers);  // [2, 4]

const sum = numbers.reduce((acc, num) => acc + num, 0); //reduce function in JavaScript array methods is used to process each element of an array and accumulate a single result. It takes a callback function and an optional initial value.
console.log(sum); // 15

numbers.forEach(num => console.log(num)); //forEach function runs a particular function on each element of an array

const firstLarge = numbers.find(num => num > 3); // find function returns the first event that satisfies a specific question
console.log(firstLarge);// 4
