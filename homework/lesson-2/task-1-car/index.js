class UniqueID {
    static usedIds = [];

    static getUniqueID() {
        let randomId = this.getRandomNumber();

        while (UniqueID.usedIds.includes(randomId)) {
            randomId = this.getRandomNumber();
        }

        UniqueID.usedIds.push(randomId);

        return randomId;
    }

    static getRandomNumber() {
        return Math.floor(Math.random() * 1000000);
    }
}

class Car {
    #wheelsAmount = 4;
    vendorOrigin = '';
    vendorName = '';
    model = '';
    engineCapacities = [];
    id = 0;
    yearOfRelease = 0;

    constructor() {
        this.id = UniqueID.getUniqueID();
    }

    getCarInfo() {
        return this.getCarName() + ' from ' + this.getVendorOrigin() + '\n' +
            'Id: ' + this.id + '\n' +
            'Year of release: ' + this.yearOfRelease + '\n' +
            'Available engine capacities: ' + this.getEngineCapacitiesList().join(', ') + '\n' +
            'Has ' + this.#wheelsAmount + ' wheels';
    }

    getCarName() {
        return this.getVendorName() + ' ' + this.getCarModel();
    }

    getEngineCapacitiesList() {
        return this.engineCapacities;
    }

    getVendorOrigin() {
        return this.vendorOrigin;
    }

    getVendorName() {
        return this.vendorName;
    }

    getCarModel() {
        return this.model;
    }

    increaseYearOfRelease(increment) {
        this.yearOfRelease += increment;
    }

    decreaseYearOfRelease(decrement) {
        this.yearOfRelease -= decrement;
    }

    get id() {
        return this.id;
    }
}

class GermanCar extends Car {
    vendorOrigin = 'Germany';
}

class BMW extends GermanCar {
    vendorName = 'BMW';

    constructor(modelVersion) {
        super();
        this.modelVersion = modelVersion;
    }

    getCarModel() {
        return this.model + this.modelVersion;
    }
}

class BMWX6 extends BMW {
    model = 'X6';
    engineCapacities = [3500, 4000, 4150];
    yearOfRelease = 2010;

    constructor(modelVersion) {
        super();
        this.modelVersion = ' v' + modelVersion;

        this.increaseYearOfRelease(5);
    }

    getCarInfo() {
        return super.getCarInfo() + '\n' +
            'Type: ' + BMWX6.getCarType();
    }

    static getCarType() {
        return 'luxury crossover';
    }
}

var bmw = new BMW('1');

console.log(bmw.getCarInfo());

var bmwX6 = new BMWX6('2');

console.log(bmwX6.getCarInfo());

var bmw_x6v3 = Object.assign(bmwX6, new BMWX6('3'));

console.log(bmw_x6v3.getCarInfo());
