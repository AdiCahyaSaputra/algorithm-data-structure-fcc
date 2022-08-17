function getIndexToIns(arr, num) {
  if(arr.length === 0) {
    return 0;
  }
  
  arr = arr.sort((a, b) => a - b); // sort ascending 0 - n
  for(let i in arr) {
   if(num === arr[i]) {
     return parseInt(i);
   } else if(num < arr[i] && num > arr[i - 1]) {
     return parseInt(i);
   } else if(num > arr[arr.length -1]) {
     return arr.length;
   }
  }
}

console.log(getIndexToIns(
  [10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns(
  [10, 20, 30, 40, 50], 30)); // 2
console.log(getIndexToIns(
  [3, 10, 5], 3)); // 0
console.log(getIndexToIns(
  [2, 20, 10], 19)); // 2
console.log(getIndexToIns(
  [2, 5, 10], 15)); // 3
console.log(getIndexToIns(
  [], 1)); // 0