// let btn = document.querySelector("button");

// btn.addEventListener("click", generateColor);

// function generateColor() {
//     let num1 = Math.floor(Math.random() * 255);
//     let num2 = Math.floor(Math.random() * 255);
//     let num3 = Math.floor(Math.random() * 255);

//     let color = `rgb(${num1}, ${num2}, ${num3})`;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = color;

//     let h1 = document.querySelector("h1");
//     h1.innerText = color;
// }

const math = require("./math.js");

console.log(math.sum(2, 5));
console.log(math.mul(5 * 3));
console.log(math.g);
console.log(math.pi);

let n = 5;

for (let i = 0; i < n; i++) {
    console.log("Hello " + i);
}
