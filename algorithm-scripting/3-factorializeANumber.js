function factorialize(num) {
  
  if(num == 0) {
    return 1;
  }
  
  // return num * factorialize(num - 1);
  
  // mudah dipahami dibanding recursive
  for(let i = num -1; i > 0; i--) {
    num *= i;
  }
  return num;
}

console.log(factorialize(5)); // 120
console.log(factorialize(10)); // 3628800
console.log(factorialize(20)); // 2432902008176640000
console.log(factorialize(0)); // 1