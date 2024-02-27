class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;

    this.isPowerOn = false;
    this.isCarDriving = false;
    this.fuelVoulme = 0;
  }

  drive() {
    if (this.fuelVoulme <= 0) {
      return;
    }
    this.isPowerOn = true;
    this.isCarDriving = true;
    console.log(`${this.make} ${this.model} is driving`);
  }
}

const car = new Car('Toyota', 'Camry');
car.drive();
