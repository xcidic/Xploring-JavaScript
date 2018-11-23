if (true) {
  console.log("kondisi selalu benar");
}

// with operators
// if else
const condition = 1 < 2;
if (condition) {
  console.log("1 lebih kecil dari 2");
} else {
  // jika kondisi diatas salah
  console.log("gak pernah terjadi");
}

const isRain = "Jika hari ini hujan?";
const isNotrain = "Jika hari ini tidak hujan";
if (isRain) {
  console.log("hari ini hujan");
} else if (isNotrain) {
  console.log("hari ini tidak hujan");
} else {
  console.log("turun salju");
}

// comparison
console.log(1 === 1);

// negate
console.log(2 !== "2");

var myObj = {};
var oj = myObj;

console.log(oj === myObj);

// default value
0 || 1;
false || true;
"" || true;
let a = false || true;
console.log(a);

// function declaration
function multiply(a, b) {
  return a * b;
}

// invoke function (function invocation)
// memanggil fungsi
console.log(multiply(1, 2));
const perkalian1 = multiply(2, 2);

// function expression
const myFunc = function() {
  // anonymous function
  console.log("hello");
};

myFunc();

// arrow function
const myArrowFunc = () => console.log("my arrow");

myArrowFunc();

const myMath = () => {
  const a = multiply(3, 6);
  const b = multiply(2, 4);
  if (a < b) {
    console.log("b wins", b);
  } else {
    console.log("a wins", a);
  }
};

myMath();

// penambahan, pengurangan
