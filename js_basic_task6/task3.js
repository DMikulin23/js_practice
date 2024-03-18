// Напишіть функцію, яка приймає як параметри два числа та рядок operator(+,-,/,*). 
// Поверніть результат операції. За допомогою if-else зробіть перевірки на корректність передаваємих 
// даних та викидайте помилку(throw new Error() ), якщо дані невірні:

// Якщо операція ділення("/"), то другий параметр не може бути 0
// Для всіх операцій перший та другий параметр повинні бути числами
// Третій параметр повинен бути рядком та дорівнювати одному із 4 значень : +-/*
// Кількість аргументів не повинна бути більше 3-х
// Інші перевірки по бажанню
// Приклад використання:

// Виклик функції:

// calculate(100,5,"*");
// Вивід:

// 100 помножити на 5 = 500
// ______

// Виклик функції:

// calculate(100,5,"string");
// Вивід:

// Error: Третій параметр повинен бути +,-,/ або *
// ______

// Виклик функції:

// calculate(10,0,"/");
// Вивід:

// Error: Коли операція ділення, другий параметр повинен не дорівнювати 0

function calculate(num1, num2, operator) {
    if (arguments.length !== 3) {
        throw new Error("Кількість аргументів має бути рівна 3");
    }

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error("Перший та другий параметри мають бути числами");
    }

    if (typeof operator !== 'string') {
        throw new Error("Третій параметр повинен бути рядком");
    }

    if (!['+', '-', '*', '/'].includes(operator)) {
        throw new Error("Третій параметр повинен бути +, -, * або /");
    }

    if (operator === '/' && num2 === 0) {
        throw new Error("Коли операція ділення, другий параметр повинен не дорівнювати 0");
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            throw new Error("Невідома операція");
    }

    return `${num1} ${operator} ${num2} = ${result}`;
}

try {
    console.log(calculate(100, 5, "*"));
    console.log(calculate(100, 5, "string"));
    console.log(calculate(10, 0, "/"));
} catch (error) {
    console.error("Error:", error.message);
}
