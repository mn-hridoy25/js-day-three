/*Discount Calculator
Write a program that calculates a discount based on the type of customer:
'Regular' → 10 % discount
'Premium' → 20 % discount
'VIP' → 30 % discount
Input: 'Premium', 200 → Output: 160(after 20 % discount)*/




// Solve:-
var customerType = String("regular");
var price = Number('550')


switch (customerType.toLowerCase()) {
    case "regular":
        const regular = price - (price * (10 / 100));
        console.log(regular + ' ' + "(after 10% discount)");
        break;
    case "premium":
        let premium = price - (price * (20 / 100))
        console.log(premium + ' ' + "(after 20% discount)");
        break;
    case "vip":
        let vip = price - (price * (30 / 100))
        console.log(vip + ' ' + "(after 30% discount)");
        break
}