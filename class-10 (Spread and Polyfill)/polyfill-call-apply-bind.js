// ---------------- CALL ----------------
Function.prototype.myCall = function(requiredThis, ...args) {
  // Get your function
  const functionToBeInvoked = this; // greet

  // Assign the function the requiredThis object
  requiredThis.tempFunction = functionToBeInvoked;

  // Invoke the function
  let result = requiredThis.tempFunction(...args);

  // Delete the temp function from the object
  delete requiredThis.tempFunction;

  return result;
}

// ---------------- APPLY ----------------
Function.prototype.myApply = function(requiredThis, args) {
  // Get your function
  const functionToBeInvoked = this; // greet

  // Assign the function the requiredThis object
  requiredThis.tempFunction = functionToBeInvoked;

  // Invoke the function
  let result = requiredThis.tempFunction(...args);

  // Delete the temp function from the object
  delete requiredThis.tempFunction;

  return result;
}

// ---------------- BIND ----------------
Function.prototype.myBind = function(requiredThis, ...args) {
  // Get your function
  const functionToBeInvoked = this; // greet

  // Return a new function
  return function(...secondaryArgs) {
    return functionToBeInvoked.myApply(requiredThis, [...args, ...secondaryArgs]);
  };
}

// ------------------------------------------------------

let teacher1 = {
  firstName: "Steve",
  lastName: "Rogers",
  age: 132,
};

let teacher2 = {
  firstName: "Tony",
  lastName: "Stark",
  age: 47,
};

function greet(location) {
  console.log(`Hello, I am ${this.firstName} ${this.lastName}. I am from ${location}`);
};

// greet.myCall(teacher1, "New York", "", "");
// greet.myCall(teacher2, "Toronto", "", "");

// greet.myApply(teacher1, ["New York", "", ""]);
// greet.myApply(teacher2, ["Toronto", "", ""]);

const greetTeacher1 = greet.myBind(teacher1, "param1", "param2", "param3");
const greetTeacher2 = greet.myBind(teacher2, "Toronto", "", "");

greetTeacher1("param4", "param5", "param6");
greetTeacher2();