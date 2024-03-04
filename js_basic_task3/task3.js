/*Створіть програму, яка приймає дві змінні(числа) і виводить список парних чисел, які знаходяться між ними.

Підказка для імплементації: Спочатку треба вирахувати, яке з двох чисел більше, а яке менше, щоб встановити 
межи циклу. Для цього можна використовувати Math.min(number1, number2) та Math.max(number1,number2)*/

let number1 = 7;
let number2 = 22;
let min = Math.min(number1, number2);
let max = Math.max(number1, number2);
let evenNumbers=[];

for (let i=min; i<=max; i++) {
    if (i%2===0) {
        evenNumbers.push(i)
    }

}

console.log(`Парні чисда між ${number1} та ${number2} : ${evenNumbers.join(", ")} `)
