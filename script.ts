// tuples
let address: [string, number, string] = ["5225 Pooks Hill Rd", 523, 'North'];

// enums
enum Color {
  Gray,   // 0
  Green,  // 1
  Blue,   // 2
  Red = 777
}

let myColor: Color = Color.Red;
// console.log(myColor);


// functions
let realName = 'WIll';
function getName(): string {
  return realName;
}
// console.log(getName());

// void
function sayHello(): void {
  console.log('Hi there!');
}
// console.log(sayHello());

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply(2, 3));

// function types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
console.log(myMultiply(3, 4));