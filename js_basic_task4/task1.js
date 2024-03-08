/*Є масив чисел 

const numbers = [5, -4, 0, 6, 7, -1, 0, 0]
Використовуючи звичайний цикл for, порахуйте кількість позитивних та негативних чисел та нулів. Приклад результату:

Positive numbers:3
Negative numbers:2
Zeros:3*/



const numbers = [5, -4, 0, 6, 7, -1, 0, 0];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
  const currentNumber = numbers[i];

  if (currentNumber > 0) {
    positiveCount++;
  } else if (currentNumber < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }
}

console.log(`Positive numbers: ${positiveCount}`);
console.log(`Negative numbers: ${negativeCount}`);
console.log(`Zeros: ${zeroCount}`);