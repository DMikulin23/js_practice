/* Є масив із числами

const numbers = [150, 23, 1, -53, 49]
За допомогою .every() перевірити, чи всі елементи масиву менше 50 */

const numbers = [150, 23, 1, -53, 49];
const numCheck = numbers.every((number) => number < 50);

console.log(numCheck);