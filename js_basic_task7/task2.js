// Створити 2 об'єкти через new Object();, до кожного об'єкту додати як мінімум 3 властивості та 1 метод.

// Приклади об'єктів: person, car, book, phone, city, building etc...


const book = new Object();
book.title = 'The Great Gatsby';
book.author = 'F. Scott Fitzgerald';
book.genre = 'Classic';
book.displayInfo = function () {
    console.log(`Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}`);
};

book.displayInfo();


const city = new Object();
city.name = 'New York City';
city.population = 8398748;
city.country = 'USA';
city.showPopulation = function () {
    console.log(`The population of ${this.name} is ${this.population}.`);
};

city.showPopulation(); 
