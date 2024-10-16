

/*লজিক্যাল অপারেটর ৩ প্রকার। যথাঃ
    ১. লজিক্যাল NOT অপারেটর (!)
    ২. লজিক্যাল AND অপারেটর (&&)
    ৩. এবং লজিক্যাল OR অপারেটর (||);*/


// নিচে এদের সংক্ষিপ্ত বর্ণনা দেওয়া হলোঃ-

//     ১. লজিক্যাল NOT অপারেটরঃ কোন স্টেটমেন্ট এ (!) ব্যবহার করলে সেটা বিপরীত মান ধরে নিবে ।
// Example:-

var number = 10;
var zero = "";

console.log(!number);
console.log(!zero);




// ২. লজিক্যাল AND অপারেটরঃ কোন স্টেটমেন্ট এ (&&) ব্যবহার করলে ঐখানে থাকা সকল শর্ত সত্য হতে হবে।
// Example:-

var a = 12;
var b = 17;
var c = 22;

if (a > b && c > b) {
    console.log("Ami math parina"); // ekhane ekti statement sotto ar ekti statement mittha howai ta execute hoy nai
}
else {
    console.log("Ami math pari");
}

// ৩. এবং লজিক্যাল OR অপারেটরঃ কোন স্টেটমেন্ট এ (||) ব্যবহার করলে ঐখানে থাকা সকল শর্তের মধ্যে যেকোন একটি শর্ত সত্য হতে হবে।

//Example:-
if (a > b || c > b) {
    console.log("Ami math olpo olpo pari");// ekhane ekti statement mittha holew ar ekti statement sotto howai ta execute hoyese.
}
else {
    console.log("Ami math ekhono shikhtesi");
}