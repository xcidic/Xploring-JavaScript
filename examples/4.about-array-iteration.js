let persons = new Array("Ikhsan", "Nanang", "Fatih", "Asta");

// Array literals
let students = ["arya", "soka", "noer", "mike"];

console.log(persons);
console.log(students);

let countPersons = persons.length;
console.log(countPersons);
// akses array
let a = persons[0];
let b = persons[1];
let c = persons[2];
let d = persons[3];

console.log(a, b, c, d);

// join
let becomeOne = persons.join(" ");
console.log(becomeOne);

// looping with for loop
for (let i = 0; i < persons.length; i++) {
  let person = persons[i];
  console.log(person);
}

// with for...each
persons.forEach(person => console.log(person));

// add more in the end of array
students.push("kokom");
console.log(students);
persons[persons.length] = "hana";
console.log(persons);

// filter
// map
// splice
// etc

// bilangan factorial
// with while loop
function factorial(num) {
  let result = 1;
  while (num > 0) {
    result = result * num;
    num = num - 1;
  }
  return result;
}

// with for..loop
function factorialWithForLoop(num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
}

// with array reduce
function factorialWithArrayReduce(num) {
  let nums = Array.from({ length: num }, (value, index) => index + 1);
  return nums.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
}

console.log("with while loop", factorial(5));
console.log("with while loop", factorialWithForLoop(5));
console.log("with while loop", factorialWithArrayReduce(5));
