"use strict";
let a = 10;
const br = 20;
const array = [1, 2, 3, 4];
const array2 = [1, "pedro", 3, 4];
// interface
let PersonInterface = {
    name: "Soban",
    age: 19,
};
let cool = function (param1, param2) {
    console.log(param2, "param");
};
cool(PersonInterface, "hi");
function sanitize(str) {
    return str;
}
const getInput = () => {
    return "hi";
};
function sanitizeInput(str) {
    return sanitize(str);
}
// Create a sanitized input
let userInput = sanitizeInput(getInput());
console.log(userInput);
// Can still be re-assigned with a string though
// userInput = "new input";
