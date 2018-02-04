import * as templateStringExamples from './template-string-example';
import printDate from './time';

// Template string examples

const colors = ["Cyan", "Red", "Blue"];

function getRandomColor() {
  const randomIndex = Math.floor(
    Math.random() * colors.length
  );

  return colors[randomIndex];
}

console.log(`Color of the day is ${getRandomColor()}`);
console.log(`Color of the day is ${getRandomColor()}`);
console.log(`Color of the day is ${getRandomColor()}`);

// arrow functions examples

const up = parameter => parameter.toUpperCase();

const name = () => 'Renata';

const add = (n1, n2) => {
  console.log('Adding numbers');
  return n1 + n2;
};

console.log(`${up('morning')} ${name()}`);

console.log(add(1, 4));

const convertToObj = (x, y) => (
  {
    x: x,
    y: y,
  }
);

console.log(convertToObj(1, 4));

// context in arrow functions

const test = () => this.x;

console.log(test()); //  this == window, returns window.x

var o = {
  t: test
};

console.log(o.t()); // this == window, returns window.x

// Counter examples

function Counter() {
  this.counter = 0;
  let increment = function() {
    this.counter++;
    console.log(this.counter);
  };
  setInterval(increment.bind(this), 2000);
}

const count1 = new Counter();

function ArrowCounter() {
  this.counter = 0;
  setInterval(() => {
    this.counter++;
    console.log(this.counter);
  }, 2000);
}

const count2 = new ArrowCounter();

// destructuring examples

const arr = [1, 2, 3, 4, 5];

const [,,,,a,b] = arr;

console.log(a, b);

const boxer = {
  name: 'Andrzej',
  surname: 'Gołota',
  age: 50
};

const {surname} = boxer;

const { age: andrzejsAge } = boxer;

const arrow = ({ age, name }) => console.log(age);

arrow(boxer);

console.log(andrzejsAge);

// classes examples

class Animal {
  constructor(sound) {
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

const cat = new Animal('meow');

cat.makeSound();

class Cat extends Animal {
  constructor(sound, name) {
    super(sound);
    this.name = name;
  }

  sayHello() {
    console.log(`${this.name}: ${this.sound}`);
  }
}

const kitty = new Cat('meow', 'Puszek');

kitty.sayHello();
kitty.makeSound();

// modules examples (these are imported from separate file)

templateStringExamples.beBad();

templateStringExamples.sayHello();

printDate();