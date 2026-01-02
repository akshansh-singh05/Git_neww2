// SPLICE;- removes, replaces., add element in places

// FORMET ;- splice(start, deleteCount, item0 ..... itemN)

// slices: copies a portion of arrray while splice do changes in original array...

let colours = ["red", "yellow", "blue","pink", "voilet", ""];

colours.splice(2);

console.log(colours);
colours.splice(2,4);

console.log(colours);

colours.splice(0,1, "black", "gray"); // o aur 1 index pe jake black and gray ko store karana hai
console.log(colours);
console.log(colours);

