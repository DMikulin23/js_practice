// Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає суму всіх чисел у масиві.

function sum(arr1) {
    return arr1.reduce((num1, num2) => num1 + num2, 0);
}

const num = [2, 4, 6, 8];
const sumNum = sum(num);

console.log(sumNum);