function truncateString(str, num) {
  if(str.indexOf(str[num]) === -1) {
    return str;
  }
  
  str = str.split('')
  str.splice(num, str.length -1);
  str.push("...");
  return str.join('');
}

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    8
  )
); // A-tisket...

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // Peter piper...                 
console.log(truncateString("A-", 1)); // A...
console.log(truncateString("Absolutely Longer", 2)); // Ab...