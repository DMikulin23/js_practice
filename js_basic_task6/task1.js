// Використовуючи рекурсію, напишіть функцію, яка приймає два параметри - start та finish. 
// За допомогою рекурсії, виведіть всі числа від start до finish.

// Приклад використання:

// printIntervalRec(10,15);
// Результат:

// 10
// 11
// 12
// 13
// 14
// 15

function countTenToFifteen(startTen) {
    if (startTen <= 15) {
        console.log(startTen);
        startTen++;
        countTenToFifteen(startTen);
    }
}

countTenToFifteen(10);