/*Створіть програму, яка приймає такі змінні: базовий рядок та символ, який потрібно замінити(як змінні), 
а потім замінює вказаний символ у базовому рядку на "*" та записує у новий рядок, який потім виводить у консоль. */

let baseString = "Hello, World!";
let charToReplace = "l";
let newString = "";

for (let i = 0; i < baseString.length; i++) {
  let currentChar = baseString[i];

  if (currentChar === charToReplace) {
    newString += "*";
  } else {
    newString += currentChar;
  }
}

console.log("Исходная строка:", baseString);
console.log("Символ для замены:", charToReplace);
console.log("Модифицированная строка:", newString);