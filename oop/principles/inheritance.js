const animalPrototype = {
  speak() {
    console.log(`${this.name} says ${this.sound}`);
  },
};

const dog = {
  name: 'dog',
  sound: 'woof',
};

dog.__proto__ = animalPrototype;

dog.speak();

class Animal {
  constructor(name, sound) {
    (this.name = name), (this.sound = sound);
  }

  speak() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, 'woof');
  }
}

const dog1 = new Dog('dog');
dog1.speak();
console.log(dog1.hasOwnProperty('name'));

class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log(`Drawing a shape with ${this.color} color`);
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color), (this.radius = radius);
  }

  draw() {
    //   super.draw()
    console.log(`Drawing a shape with ${this.color} color and radius ${this.radius}`);
  }
}

const circle = new Circle('blue', 5);
circle.draw();

class AnimalNew {
  constructor(name, sound) {
    (this.name = name), (this.sound = sound);
  }

  speak() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

class Cat extends AnimalNew {
  constructor(name) {
    super(name, 'Meow');
  }
}

class Dog2 extends AnimalNew {}

const cat = new Cat('Tom');
const dog2 = new Dog2('Jack', 'Woof');

cat.speak();
dog2.speak();

class WildCat extends Cat {
  constructor(name) {
    super(name);
    this.sound = 'Hrrr';
  }
}

const panther = new WildCat('Bahira');
panther.speak();
