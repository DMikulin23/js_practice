// Напишіть функцію, яка приймає масив чисел в якості аргументу і 
// повертає новий масив, в якому кожен елемент буде піднесений до квадрата.

function squre(arr1) {
    return arr1.map(arr => arr * arr);
}

const num = [2, 4, 6, 8];
const sqNum = squre(num);

console.log(sqNum);