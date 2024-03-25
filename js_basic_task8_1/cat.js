import  Animal  from "./animal.js";

export class Cat extends Animal {
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


