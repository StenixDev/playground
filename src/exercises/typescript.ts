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

const nums: number[] = [1, 2, 3, 4, 5];

const str: string[] = ["one", "two", "three"];

const items: string[] = [];

items.push("headset");

const numItems: Array<number> = [1, 2, 3, 45];

// multi  dimentional arr

const singleDi: number[] = [1, 2, 3, 45];
const multiDi: number[][] = [[1, 2, 3, 4, 5]];
const triple: number[][][] = [[[1, 2, 3, 4]]];

console.log(singleDi);
console.log(multiDi);
console.log(triple);

// Objects

const person: { firstName: string; lastName: string; age: number } = {
  firstName: "stenix",
  lastName: "xCode",
  age: 34,
};

function printUser(): { name: string; age: number; location: string } {
  return {
    name: "stenix",
    age: 34,
    location: "Phil",
  };
}

console.log(printUser());

// Type   Aliases

type User = {
  name: string;
  age: number;
  location: string;
};

function printUserInfo(user: User) {
  return `Name: ${user.name} Age: ${user.age} Location: ${user.location}`;
}

console.log(printUserInfo({ name: "stenix", age: 34, location: "phil" }));
