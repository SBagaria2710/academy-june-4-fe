// "use strict";

// var firstName = "Shashwat";
// console.log(firstName);


let cap = {
  firstName: "Steve",
  sayHi: function() {
    console.log("Hi, I am " + this.firstName);
  }
};

cap.sayHi(); // Hi, I am Steve
let sayHiOuter = cap.sayHi;

// let firstName = "Shashwat";
sayHiOuter();