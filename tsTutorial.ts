// type annotations

let a: number = 10;
const br: number = 20;
const array: number[] = [1, 2, 3, 4];
const array2: any[] = [1, "pedro", 3, 4];

// object types

function printName(obj: { first: string; last?: string }) {
  // console.log(obj.last.toUpperCase());    //giving error 'obj.last can possibly be undefined'
  // narrowing
  if (obj.last !== undefined) {
    console.log(obj.last.toUpperCase());
  }
  console.log(obj.last?.toUpperCase());
}

printName({ first: "Soban", last: "Javed" });

// type aliases & interfaces alongwith unions
type UserId = string | number | null;

interface PersonInterface {
  name: string;
  age?: number;
}

let PersonInterface = {
  name: "Soban",
  age: 19,
};

let cool = function (param1: PersonInterface, param2: string): void {
  console.log(param2, "param");
};

let obj: { first: string; last?: string };

cool(PersonInterface, "hi");

type UserInputSanitizedString = string;

function sanitize(str: UserInputSanitizedString) {
  return str;
}

const getInput = (): string => {
  return "hi";
};

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// Create a sanitized input
let userInput = sanitizeInput(getInput());

console.log(userInput);

// Can still be re-assigned with a string though
userInput = "2";
