// let user = { name: "John" };
// let user1 = { name: "Admin" };

// function sayHi() {
//   console.log(`Hello! I am ${this.name}`);
// }

// user.sayHi = sayHi;
// user1.sayHi = sayHi;

// user.sayHi();
// user1.sayHi();

// ------------------------------------

// var firstVar = "Scaler";
// let secondVar = "Academy";

// console.log("First: ", firstVar);
// console.log("Second: ", secondVar);

// ------------------------------------
// Q1

// let cap = {
//   firstName: "Steve",
//   sayHi: function() {
//     console.log("Hi, I am " + this.firstName);
//   }
// };

// cap.sayHi(); // Hi, I am Steve
// let sayHiOuter = cap.sayHi;

// let firstName = "Shashwat";
// sayHiOuter();

// Rules:
// For Global Execution context this will be a window object.
// For Execution context created with method call(calling with object), this will be that object.
// For Execution context created with a function call(calling without object), this will be that window.

// ------------------------------------
// Q2

// let cap = {
//   firstName : "Steve",
//   sayHi : function (){
//       console.log("53", this.firstName); // 53 Steve
//       const iAmInner = function (param) {
//           console.log("55",this.firstName); // 55 undefined
//       }
//       iAmInner(20);
//   }
// }
// cap.sayHi();

// ------------------------------------
// Q3

// let cap = {
//   firstName : "Steve",
//   sayHi : function (){
//       console.log("53", this.firstName); // 53 Steve
//       const iAmInner = (param) => {
//           console.log("55",this.firstName); // 55 Steve
//       }
//       iAmInner(20);
//   }
// }
// cap.sayHi();

// GEC -> this -> window object
// EC is created with -> method call -> this will be that object
// EC is created with -> function call -> this will be that window.

// ------------------------------------
// Q4

// let cap = {
//   firstName : "Steve",
//   sayHi : () => {
//       console.log("53", this.firstName); // 53 undefined
//       const iAmInner = (param) => {
//           console.log("55",this.firstName); // 55 undefined
//       }
//       iAmInner(20);
//   }
// }
// cap.sayHi();

// ------------------------------------
// Q5

// var firstName = "Loki";
// let cap = {
//   firstName: "Steve",
//   sayHi: function () {
//     console.log("53", this.firstName); // 53 Steve
//     const subInner = () => {
//       console.log("54", this.firstName); // 54 Steve
//       const iAmInner = () => {
//         console.log("55", this.firstName); // 55 Steve
//       };
//       iAmInner();
//     };
//     subInner();
//   },
// };
// cap.sayHi();
