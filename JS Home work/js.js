let num = 123;
let hundreds = Math.floor(num / 100);
let tens = Math.floor(num / 10) % 10;
let ones = num % 10;
let newNum = (tens * 100) + (hundreds * 10) + ones;
console.log(newNum);

let A = 5;
let B = 7;
if (A !== B) {
  A = A + B;
  B = A;
} else {
  A = 0;
  B = 0;
}
console.log(A, B);


let year = 2021;
let daysInYear = 0;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  daysInYear = 366;
} else {
  daysInYear = 365;
}
console.log(daysInYear);


// 6 zadacha
let A = [5, 2, 9, 1, 7, 4];
let min = A[1];
for (let i = 3; i < A.length; i += 2) {
  if (A[i] < min) {
    min = A[i];
  }
}
console.log(min);


let A = [5, 2, 9, 1, 7, 4];
let lastElement = A[A.length-1];
for (let i = A.length - 1; i > 0; i--) {
  A[i] = A[i - 1];
}
A[0] = lastElement;
console.log(A); // [4, 5, 2, 9, 1, 7]


let A = [5, 2, 9, 1, 7, 4];
let firstElement = A[0];
for (let i = 0; i < A.length - 1; i++) {
  A[i] = A[i + 1];
}
A[A.length - 1] = firstElement;
console.log(A); // [2, 9, 1, 7, 4, 5]


let purchaseAmount = 800;
let discount = 0;
if (purchaseAmount > 1000) {
  discount = 0.1;
} else if (purchaseAmount > 500) {
  discount = 0.05;
}
let totalAmount = purchaseAmount - (purchaseAmount * discount);
console.log(totalAmount);