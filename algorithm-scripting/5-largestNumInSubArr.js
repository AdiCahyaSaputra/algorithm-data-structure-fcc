function largestNum(arr) {
  let newArr = [];
  arr.forEach(e => {
    newArr.push(e.reduce((currEl, nextEl) => {
      return currEl > nextEl ? currEl : nextEl;
    }));
  })
  return newArr;
}

console.log(largestNum(
  [
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ]
)); // [27, 5, 39, 1001]

console.log(largestNum(
  [
    [4, 9, 1, 3], 
    [13, 35, 18, 26], 
    [32, 35, 97, 39], 
    [1000000, 1001, 857, 1]
  ]
)); // [9, 35, 97, 1000000]

console.log(largestNum(
 [
   [17, 23, 25, 12], 
   [25, 7, 34, 48], 
   [4, -10, 18, 21], 
   [-72, -3, -17, -10]
  ]
)); // [25, 48, 21, -3]
