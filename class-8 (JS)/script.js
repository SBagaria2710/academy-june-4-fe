// var age = 20;
// var str = `I am ${age} years old`;

// console.log(str);


// Typeof Operator
// var foo = [1, 2, 3, 4, 5];
// var bar = {0: 1, 1: 2, 2: 3, 3: 4, 4: 5};
// console.log(typeof foo, Array.isArray(bar));

// Functions
// function foo() {
//   console.log('Hello from inside the function');
//   return;
// }

// var a = foo();
// console.log(a);

// if (true) {
//   var a = 10; // function scope
//   let b = 20; // block scope
//   const c = 30; // block scope 

//   console.log("Inside: ", b, c);
// }

// function foo () {
//   var a = 10;
// }
// foo();

// console.log(a);
// console.log(b);
// console.log(c);

// bar = 10;
// var bar;
// console.log(bar);

// Objects
let obj = {
  "firstName": "John",
  "lastName": "Doe",
  10: 20,
  foo: {
    "age": 30,
  },
  sayHi: function() {
    console.log("Hi");
  }
};

console.log(obj.firstName); // John
console.log(obj["lastName"]); // Doe
console.log(obj[10]); // 20
console.log(obj.foo.age) // 30
// console.log(obj.bar.age); // Error
console.log(typeof obj.sayHi); // Hi