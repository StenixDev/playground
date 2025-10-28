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

// optional properties

console.log(printUserInfo({ name: "stenix", age: 34, location: "phil" }));

type User2 = {
  name: string;
  age?: number;
  readonly location: string;
};

const userInput: User2 = {
  name: "Stenix",
  location: "Phil",
};

userInput.name = "stigward";

type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User3 = UserInfo & AccountDetails;

const stenix: User3 = {
  first: "Step",
  last: "hen",
  age: 34,
  email: "connect@stenix.dev",
  password: "stenixpass",
};

const items2: (number | string)[] = [1, "stenix", 12];

enum WeatherConditions {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
}

console.log(WeatherConditions.Cloudy);
