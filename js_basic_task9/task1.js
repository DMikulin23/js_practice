// За допомогою setTimeout створіть функцію, яка приймає рядок, та кількість секунд.

// Функція повинна виводити переданий текст через передану кількість секунд

export default function startProgram() {
    console.log("Start");
}

startProgram();
setTimeout(function () {
    console.log("Hallo World!");
}, 7000)