let mixin = {
    madeIn() {
        console.log('This car was made in 2019.');
    }
}

let carMixin = {
    __proto__: mixin,

    madeIn() {
        super.madeIn();
    }
};

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine, and is ${this.color}.`
    }

    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;
        return doors1 + doors2;
    }
}

class SUV extends Car {
    constructor (doors, engine, color, make, carStats) {
        super (doors, engine, color, carStats);
        this.make = make;
        this.wheels = 4;
        this.ac = true;

        //assign mixin
        Object.assign(this, carMixin);
    }

    myMake() {
        return console.log(`This SUV is a ${this.make}.`)
    }
}

const cx5 = new Car (4, 'v6', 'black');
const cx6 = new SUV (4, 'v6', 'navy', 'Mazda');
const camaro = new Car (2, 'v6', 'red');

console.log(cx5);
console.log(cx5.carStats());

console.log(camaro);
console.log(camaro.carStats());

console.log(cx6);
console.log(cx6.myMake());
console.log(cx6.madeIn())


console.log(Car.totalDoors(cx5, camaro));