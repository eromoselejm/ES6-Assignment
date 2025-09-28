const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
console.log(doubled);

const evenNumbers= numbers.filter(num => num % 2 === 0); // [2, 4]
console.log(evenNumbers);

const sum = numbers.reduce((acc, num) => acc + num, 0); // 15
console.log(sum);

numbers.forEach(num => console.log(num));

const firstLarge = numbers.find(num => num > 3); // 4
console.log(firstLarge);