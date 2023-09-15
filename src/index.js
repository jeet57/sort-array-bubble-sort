import "./styles.css";

const sortArray = (arr) => {
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
};
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
let arr1 = [1, 5, 0, 11, 8, 3, 9];

let sortedArr = sortArray(arr1);
console.log(sortedArr);
