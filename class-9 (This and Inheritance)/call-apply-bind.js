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

// greet.call(teacher1, "New York", "", "", ...);
// greet.call(teacher2, "Toronto", "", "", ...);

// greet.apply(teacher1, ["New York", "", ""]);
// greet.apply(teacher2, ["Toronto", "", ""]);

const greetTeacher1 = greet.bind(teacher1, "New York", "", "");
const greetTeacher2 = greet.bind(teacher2, "Toronto", "", "");

greetTeacher1();
greetTeacher2();