// array refrences refers to the address of array in memory;

// jab bhi ek array create hota hai uske sath ek refrence address bhi cretae hota hai memory me

// array ki value to kahi aur hoti hai lekin refrence ko uska locatuon memory me pata hota hai

let arr = ["a","b"];

let arrcpy = arr;

console.log(arrcpy);

arrcpy.push("c");

console.log(arrcpy);

if (arr == arrcpy) {
    console.log("true");  // array ka address same hai kyuki dono copy hai... address bhi copy ho jata hai
}


// constant arrays

const arrr = ["abs","abc",""];

arrr.push("4");

console.log(arrr);

// array ko constant krne ka mtlb hai ki memory me address saame rhega bas valuebadalegi...

//  const array ke andar hm dusare array ke value ko assign nhi kr skte nadusare array ke address ko;

