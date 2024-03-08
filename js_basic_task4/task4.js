/*Є масив рядків імен

const names = ["John", "Fernando", "Alexandra", "Anatolii", "Arina", "Elon"]
 Використовуючи .find(), виведіть перше ім'я, з довжиною більше 6 символів*/

 const names = ["John", "Fernando", "Alexandra", "Anatolii", "Arina", "Elon"];
 const lettersLess6 = names.find(word => word.length > 6);
 
 console.log(lettersLess6);