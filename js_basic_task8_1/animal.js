// Створити клас Animal. Додати до нього властивості color, name, type. Та методи sayHello та run. 
// Реалізацію методів зробіть будь яку, але логічну.

export default class Animal {
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

