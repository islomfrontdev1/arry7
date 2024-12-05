let originalArray = [2, 4, 9, 11, 43, 54, 10, 45, 67, 8, 90];

let evenNumbers = [];

for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] % 2 === 0) {
    evenNumbers.push(originalArray[i]);
  }
}

console.log("Juft sonlar:", evenNumbers);
