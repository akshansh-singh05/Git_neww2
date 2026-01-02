// conditional statements

console.log("before if statemnet");

let age=46;
if (age>=18) {
    console.log("you csn drive");
}

// elseif statement 

// if ( condition 1 ) {
//     // do something;
// }
// else if(condition 2){
//     // do something else
// }
// else if(condition 3){
//     // do something else
// }


// else if ki condition tab check hogi jab jab uper wala if ka condition false hoga similarlyy

// let size = "M";

// if (size === "XL") {
//     console.log("price is Rs. 250");
// } else if (size === "L") {
//     console.log("price us Rs. 200");
// }
//  else if (size === "M") {
//     console.log("price us Rs. 150");
// }
// else{
//     console.log("price us Rs. 50");
// }

// nesting is writing multiple if else statement in one if stament

let marks = "";

if(marks>=33){
    console.log("Pass");
    if (marks>=80) {
        console.log("Grades : Outstanding");
    }

}
else{
    console.log("Fail");
}