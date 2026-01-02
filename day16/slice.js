// return a part of the oiginal string as a new string

// str.slice(start, end);  here ending element is exclusive while starting element is inclusive
let str = "IloveCoding";

let strn = str.slice(5);       // "coding"
let msg = str.slice(1,4);     // "love"


// str.slice(-num) = str.slice(length-num); same

console.log(msg);
console.log(strn);

console.log(str.slice(-2));

      // replace // 

// searches a value in the string & returns a new string with the value repeated

let repl = str.replace("o", "x");     // output is IlxveCxding
let repn = str.replace("love", "do");   // output is IdoCoding

console.log(repl);
console.log(repn);

// repeat method

// returns a string with the number of copies of the string

let strp = "Mango";

console.log(str.repeat(3));     // output is : IloveCodingIloveCodingIloveCoding