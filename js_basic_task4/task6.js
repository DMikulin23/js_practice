// Є рядок email із ємейлом користувача

// string email = "daniel.abrams@gmail.com"
// За допомогою .split() розбийте його на дві частини по символу '@'. Запишіть вихідний масив у нову змінну.

// новий масив буде ['daniel.abrams', 'gmail.com']
// За допомогою .splice() треба замінити домен пошти(те що після @, тобто другий елемент масиву із індексом 1) на 'changed.com'.

// За допомогою .join() конвертуйте масив із зміненим ємейлом до рядка додав символ '@' між двома елементами масиву, виведіть цей рядок. 

// daniel.abrams@changed.com

const stringEmail = "daniel.abrams@gmail.com";
const words = stringEmail.split("@");
words.splice(1, 1, "changed.com");
const final = words.join("@");

console.log(final);

