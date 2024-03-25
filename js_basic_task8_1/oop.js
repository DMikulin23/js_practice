class Car {
    turnOn() {
        console.log("Car is turn on");
    }
    turnOff() {
        console.log("Car is turn off");
    }
    fillPetrol(litters) {
        console.log(`${litters} litters of patrol filled`);
    }
}

const bmw = new Car();

bmw.turnOn();
bmw.fillPetrol(50);
bmw.turnOff();