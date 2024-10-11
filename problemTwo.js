// 2. Grade Calculator
// Create a program that takes a student's score (out of 100) as input and assigns a grade based on the score.

// A: 90 and above
// B: 80 to 89
// C: 70 to 79
// D: 60 to 69
// F: Below 60


// solve:

const result = Number('85');

if (result >= 90 && result <= 100) {
    console.log("You got A");
}
else if (result >= 80 && result <= 89) {
    console.log("You got B");
}
else if (result >= 70 && result <= 79) {
    console.log("You got C");
}
else if (result >= 60 && result <= 69) {
    console.log("You got D");

}

else if (result < 60) {
    console.log("You are fail");
}
else {
    console.log("Please input a correct value");
}

