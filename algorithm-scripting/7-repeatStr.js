function repeatStringNumTimes(str, num) {
  if(num <= 0) {
    return "";
  }
  
  const arr = [];
  str = str.split(' ');
  for(let i = num; i > 0; i--) {
    // 1 dipush 1 jadi 2. 2 dipush 2 jadi 4. 4 dipush 4 jadi 8. 8 dipush 8 jadi 16
    // str.push(...str); // salah!
    arr.push(...str);
  }
  return arr.join('');
}

console.log(repeatStringNumTimes("gg", 7))
//repeatStringNumTimes("gg", 4);