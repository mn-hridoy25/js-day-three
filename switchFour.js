/*Vowel or Consonant Checker
Write a program that takes a character (a-z) as input and prints whether it is a vowel or consonant.
Input: 'a' → Output: Vowel
Input: 'b' → Output: Consonant*/


// Solve:-
var input = String("b");


switch (input.toLowerCase()) {
    case 'a'||'e'||'i'||'o'||'u':
        console.log("Vowel");
        break;
    default:
        console.log("Constant Or anything");
        break;
}