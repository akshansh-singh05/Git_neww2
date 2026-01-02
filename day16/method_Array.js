/*

Push: add to end
Unshift: add to start
Pop: delete from end and returns it
Shift: delete from start and returns it


*/

let cars = ["audi","nano","tata"];

cars.push("toyota");

console.log(cars);

cars.unshift("jagaur");
console.log(cars);

cars.pop();
console.log(cars);

cars.shift();
console.log(cars);

// indexOf arrays

// returns index of something

// console.log(cars.indexOf("nano"));

let ptr  = cars.indexOf("nano");
console.log(ptr);
// includes

// search for value

console.log(cars.includes("toyota"));


// cocatenation : merging of two arrays

let cars2 = ["babu","shona","cutie"];

let concc = cars.concat(cars2);

console.log(concc);

// reverse an arrays

let rev = cars2.reverse();

console.log(rev);