const foo = function() {
  console.log("foobar");
};

// functions are object
foo.bar = "baz";
console.log(foo);
console.log(foo.bar);
// Invoke it using the variable
foo();

function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");

// function sayHello() {
//    return function() {
//       console.log("Hello!");
//    }
// }

// const sayHello = function() {
//    return function() {
//       console.log("Hello!");
//    }
// }
// const myFunc = sayHello();
// myFunc();

// function sayHello() {
//    return function() {
//       console.log("Hello!");
//    }
// }
// sayHello()();

const person = {
  firstName: "Abdul Fattah",
  lastName: "Ikhsan",
  displayName: function() {
    return this.firstName + " " + this.lastName;
  }
};

//adding more property
person.age = 20;

// akses object
var lastNameProp = "lastName";
person["firstName"];
person[lastNameProp];
person.displayName();

// hoisting
var myVar = 1;
b();
function b() {
  console.log("hoho");
}

// IIFE
(function() {
  console.log("immediately");
})();

// callback
function withCallback(param, fun) {
  let val = param + 2;
  fun(val);
}

withCallback(2, function(val) {
  console.log(val);
});

console.log("*******", " contructor", "*******");
// Function constructor
function Person(firstName, lastName) {
  let person = {};
  person.firstName = firstName;
  person.lastName = lastName;
  person.displayName = function() {
    return `${firstName} ${lastName}`;
  };
  return person;
}

let ikhsan = Person("Abdul Fattah", "Ikhsan");
let fullName = ikhsan.displayName();
console.log(ikhsan);
console.log(fullName);
