// 3. Leap Year Checker
// Write a program that checks if a given year is a leap year.

// A year is a leap year if it is divisible by 4.
// However, if the year is divisible by 100, it must also be divisible by 400 to be a leap year.


const Year = Number('2023');


if (Year % 4 == 0 || Year % 100 == 0 || Year % 400 == 0) {
    console.log("This is a leap year");
}
else {
    console.log("This is not a leap year");

}