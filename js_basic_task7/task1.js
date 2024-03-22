// Створити 3 об'єкти через {}, кожен об'єкт повинен мати як мінімум 3 властивості і 2 методи.

// Приклади об'єктів: person, car, book, phone, city, building etc...


const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    },
    increaseAge() {
        this.age++;
        console.log(`Happy Birthday! You are now ${this.age} years old.`);
    }
};

user.greet();
user.increaseAge();


const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    start() {
        console.log('The engine starts.');
    },
    stop() {
        console.log('The engine stops.');
    }
};

car.start();
car.stop();


const book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    open() {
        console.log('The book is opened.');
    },
    close() {
        console.log('The book is closed.');
    }
};

book.open();
book.close();
