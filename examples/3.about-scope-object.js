console.log(this);
// console.log(window);

var myGlobalVar = "Hai, aku adalah global variable";
console.log("1. panggil langsung:", myGlobalVar);
console.log("2. via global object:", window.myGlobalVar);
console.log("3. via this:", this.myGlobalVar);

function b() {
  console.log("inside function b =", myNaiveVar);
}

function a() {
  var myNaiveVar = 2;
  b();
}

var myNaiveVar = 1;
a();

// function c() {
//   var myNaiveVar = 2;
//   var d = function() {
//     console.log("inside function c =", myNaiveVar);
//   };
//   d();
// }

// c();
