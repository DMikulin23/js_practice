// Створіть функцію, яка приймає рядок тексту та кількість секунд, а також 
// колбек-функцію(яку ми створили у файлі task1.js - тобто імпортуємо її).

// Ця функція повинна викликати колбек через передану кількість секунд і передати в нього переданий текст як аргумент. 

// Тобто, функція-колбек повинна робити якусь дію із переданим в неї рядком

import startProgram from "./task1.js";

function delayedCallback(text, seconds, callback) {
    setTimeout(function () {
        callback(text);
    }, seconds * 3000);
}

delayedCallback("Hello World!", 7, function (text) {
    console.log(text);
});