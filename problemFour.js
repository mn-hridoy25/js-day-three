// 4. Even or Odd
// Write a program that takes an integer as input and prints whether the number is even or odd.



// solve:

let a = '654';
const num = parseInt(a);


if (isNaN(num)) {
    console.log("Please input a number");
}
else {
    if (num % 2 == 0) {
        console.log("This is an Even numnber");
    }
    else {
        console.log("This is an Odd number");
    }
}