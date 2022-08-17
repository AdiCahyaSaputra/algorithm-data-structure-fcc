function bouncer(arr) {
  return arr.filter(e => !!e);
}

console.log(bouncer([7, "ate", "", false, 9]))