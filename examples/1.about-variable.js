var firstName = "Abdul Fattah";
let lastName = "Ikhsan";
const PI = 3.14;
let age = 100;
console.log(PI);
console.log(age);

// object literals
let myData = {
  firstName: "Abdul Fattah",
  lastName: "Ikhsan",
  age: 20,
  address: ["Jl. Mangga"]
};

// array
let fruits = ["apel", "jeruk", "mangga"];

let mySym = Symbol();
let otherSym = Symbol("anything");
console.log(otherSym);

// concatenation
console.log("Abdul Fattah" + " " + "Ikhsan");
let myFullName = "My name is " + firstName + " " + lastName;
console.log(myFullName);

// with template string
let otherName = `My name is ${firstName} ${lastName}`;
console.log(otherName);

// coerce
let myAge = `Halo, namaku ${firstName} ${lastName} dan umurku ${age} tahun`;
console.log(myAge);
