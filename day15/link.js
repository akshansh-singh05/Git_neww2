console.log("Hello World");

let a =5;
let b = 7;

console.log("sum is : ", a + b);

// template literals

let pencilPrice = 10;
let eraserPrice = 5;

// let output = "The total price is : " + (pencilPrice + eraserPrice) + "Rupee";
// console.log("The total price is : " , pencilPrice + eraserPrice , "Rupee");

let output = `The total price is : ${pencilPrice + eraserPrice} Ruppees` // back tick
let output1 = `The total price is : ${pencilPrice } Ruppees`   // back tick

console.log(output);

// template literals ` write string ${}`; uses to phle calcualte hoga fir wo string ke andar used hgaa

// OPERATORS in JAVASCRIPT

// COMPARISON operator

/*
==
compare value not type
"123" = 123
gives true

===
compare value and type also
"123" = 123
gives false

//  comparison for non- numbers 

'a' > 'A'
true   it compares javascript unicodes value  for ex:- 'a' = 61; while 'A' = 41;


*/