class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    };
    honk() {
        console.log("Beep!");
    };
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    };
}

//let myFirstVehicle = new Vehicle("Honda","CRV",2022)
//myFirstVehicle.honk() //Beep!
//myFirstVehicle.toString() //"The vehicle is a Honda CRV from 2022."

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

//let mySecondVehicle = new Car("Ford", "Crown Victoria", 2011);
//mySecondVehicle.numWheels //4

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    };
    revEngine() {
        console.log("VROOM!!")
    }
}

//let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
//myFirstMotorcycle.toString(); // "The vehicle is a Honda Nighthawk from 2000."
//myFirstMotorcycle.honk(); // "Beep."
//myFirstMotorcycle.revEngine(); // "VROOM!!!"
//myFirstMotorcycle.numWheels; // 2

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    };
    add(newVehicle) {
        if (this.capacity) {
            if (newVehicle instanceof Car || newVehicle instanceof Motorcycle) {
                this.vehicles.push(newVehicle);
                this.capacity--;
                return "Vehicle Added!"
            } else {
                return "Only vehicles are allowed in here!";
            }
        } else {
            return "Sorry, we're full."
        }
    }
};

// let myGarage = new Garage(5);
// undefined
// myGarage.add(new Car("Honda","Versa",2008))
// 'Vehicle Added!'
// myGarage.add("tricycle")
// "Only vehicles are allowed in here!"
// myGarage.add(new Motorcycle("Honda","Nighthawk",2000))
// 'Vehicle Added!'
// myGarage.add(mySecondVehicle)
// 'Vehicle Added!'
// myGarage.add(myFirstMotorcycle)
// 'Vehicle Added!'
// myGarage.add(new Car("Ford","F-150", 1998))
// 'Vehicle Added!'
// myGarage.add(new Car("Kia", "Soul", 2018))
// "Sorry, we're full."
// myGarage.vehicles
// (5) [Car, Motorcycle, Car, Motorcycle, Car]