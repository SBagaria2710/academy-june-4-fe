let arr = [1,2,3,4];
let arr2 = [5,6,7,8];

Array.prototype.sum = function() {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  console.log(sum);
};

arr.sum();
arr2.sum();

