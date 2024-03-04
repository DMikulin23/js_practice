/*Створіть програму, яка приймає рядок від користувача (як змінну) та замінює всі голосні літери на "*"
 у цьому рядку. Виведіть отриманий рядок(із змінами) у консоль.*/


let userInput = "test string";
let newString = "";
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < userInput.length; i++) {
  let currentChar = userInput[i].toLowerCase(); 

  if (vowels.includes(currentChar)) {
    newString += "*"; 
  } else {
    newString += currentChar; 
  }
}

console.log("Ісходна строка:", userInput);
console.log("Модифікована строка:", newString);