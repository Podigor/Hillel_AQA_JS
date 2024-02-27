class Animal {
  makeSound() {
    console.log('Some generic sound');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Woof');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow');
  }
}

const cat = new Cat();
const dog = new Dog();

const animals = [cat, dog];
animals.forEach((animal) => animal.makeSound());
