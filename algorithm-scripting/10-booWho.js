function booWho(bool) {
  return bool === true || bool === false ? true : false;
}

// tipe data nya harus yg boolean primitive
// true atau false aja
// gk boleh "true", 0, dan kawan kawan

console.log(booWho("true"))