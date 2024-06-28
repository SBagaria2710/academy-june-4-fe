// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep() {
//     console.log(this.step);
//   }
// };

// ladder.showStep(); // 0
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 2


// -------------------------------
// UPDATED CODE

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  }
};

ladder.showStep().up().up().up().up().showStep(); // 0, 4

// H.W.
// calc(2).add(5).subtract(2).multiply(10).divide(4).showResult(); // 7