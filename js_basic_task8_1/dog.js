import  Animal  from "./animal.js";

export class Dog extends Animal {
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

