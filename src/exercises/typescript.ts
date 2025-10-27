const username: string = "stenix";

const age: number = 34;

const isMarried = true;

function double(num: number) {
  return num * 2;
}

const result = double(5);

function greet(person = "Anonymous") {
  return `Hello ${person}`;
}

function printMessage(message: string) {
  return null;
}

console.log(greet("xcode"));
