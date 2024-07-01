// Statement 1 ------------------------------------
/**
 * Default Parameters
 */

// function fn(param1, param2, param3 = "Default") {
//   console.log("Params are: ", param1, param2, param3);
// }

// fn("One", "Two", "Three");

// Statement 2 ------------------------------------
/**
 * Spread Operator: Copies values from one array/object to another
 */

// let arr = [1, 2, 3, 4, 5];

// let arr2 = arr;
// arr2.pop();
// arr2.push(100);
// arr2[2] = 200;
// arr2 = 300;

// console.log("Array 1: ", arr); // ?
// console.log("Array 2: ", arr2); // ?

// let arr = [1, 2, 3, 4, 5];
// // [value, value, value, value, value]

// let arr2 = [...arr]; // Shallow Copy
// arr2.pop();
// arr2.push(100);
// arr2[2] = 200;
// // arr2 = 300;

// console.log("Array 1: ", arr); // ?
// console.log("Array 2: ", arr2); // ?

// ---------------------------------------------

// let arr = [1, 2, [3, 4], 5, 6];
// // // [value, value, reference, value, value]

// let arr2 = [...arr]; // Shallow Copy
// arr2.pop();
// arr2.push(100);
// arr2[2][0] = 200;

// console.log("Array 1: ", arr); // ?
// console.log("Array 2: ", arr2); // ?



// Statement 3 ------------------------------------
/**
 * Rest Operator: Collects all the remaining arguments into an array
 */

// function fn(param1, param2, ...restParams) {
//   console.log(param1, param2, restParams);
// }

// fn(1, 2, 3, 4, 5, 6, 7, {}, 9, [{}, {}, {}]);