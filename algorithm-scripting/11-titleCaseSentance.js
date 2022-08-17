function titleCase(str) {
  str = str.split(' ');
  const newStr = [];
  str.forEach(e => {
    e = e.toLowerCase();
    e = e.split('');
    e.unshift(e[0].toUpperCase());
    e.splice(1,1);
    newStr.push(e.join(''));
  })
  return newStr.join(' ');
}

console.log(titleCase("adi cahya saputra"));