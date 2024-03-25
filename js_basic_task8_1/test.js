class Animal {
    constructor(color, name, type) {
        this.color = color;
        this.name = name;
        this.type = type;
    }
    sayHello() {
        console.log(`This is a ${this.color} ${this.type}, his name is ${this.name}. Hallo ${this.name}!`);
    }
    run() {
        console.log(`Lets run with my ${this.type}!`);
    }
}

class Dog extends Animal {
    constructor(color, name, type, breed, age) {
        super(color, name, type);
        this.breed = breed;
        this.age = age;
    }

    playFetch() {
        console.log(`${this.name} is playing fetch.`);
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}

class Cat extends Animal {
    constructor(color, name, type, breed, age, sleepingHours) {
        super(color, name, type);
        this.breed = breed;
        this.age = age;
        this.sleepingHours = sleepingHours;
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }

    hunt() {
        console.log(`${this.name} is hunting.`);
    }
}

const dog = new Dog('brown', 'Rex', 'dog', 'German Shepherd', 3);
const cat = new Cat('white', 'Snowball', 'cat', 'Persian', 2, 12);

dog.sayHello();
dog.run();
dog.playFetch();
dog.bark();

console.log('--------------');

cat.sayHello();
cat.run();
cat.sleep();
cat.hunt();
