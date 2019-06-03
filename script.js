"use strict";
// tuples
var address = ["5225 Pooks Hill Rd", 523, 'North'];
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Red"] = 777] = "Red"; // 3
})(Color || (Color = {}));
var myColor = Color.Red;
console.log(myColor);
