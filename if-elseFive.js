// 5. Traffic Light System
// Simulate a traffic light system where the user enters a light color (red, yellow, or green), and the program prints the appropriate action (stop, slow down, or go).


// red=stop
// yellow=slow down
// green=go


var input = String("grEEn");
const color = input.toLowerCase();

if (color == "red") {
    console.log("Stop");
}
else if (color == "yellow") {
    console.log("Slow Down");
}
else if (color == "green") {
    console.log("Go");
}
else {
    console.log("Please input a valid color");
}