const person = "Andrzej";

const directory = {
  "1": "Andrzej",
  "2": "Bogdan",
};

function findPersonById(id) {
  return directory[id];
}

export const sayHello = () => {
  console.log(`Hello ${person},
  Have a nice day,
  Today is ${1 + 5} day of March,
  Be sure to talk with ${findPersonById(2)}`);
};

export const beBad = () => console.log('No hello for ya!');
