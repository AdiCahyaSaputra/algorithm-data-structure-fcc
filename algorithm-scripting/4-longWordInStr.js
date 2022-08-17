function longWordInStr(str) {
  // one line magic wkwkwk
  return str.split(' ').reduce((currEl, nextEl) => currEl.length > nextEl.length ? currEl : nextEl).length;           
}

console.log(longWordInStr("The quick brown fox jumped over the lazy dog")); // 6
console.log(longWordInStr("May the force be with you")); // 5
console.log(longWordInStr("Google do a barrel roll")); // 6
console.log(longWordInStr("What is the average airspeed velocity of an unladen swallow")); // 8
console.log(longWordInStr("What if we try a super-long word such as otorhinolaryngology")); // 19