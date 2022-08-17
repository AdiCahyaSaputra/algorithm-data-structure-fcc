function frankenSplice(arr1, arr2, n) {
  // bisa splice 0 el ternyata wkwkwk
  const newArr2 = [...arr2]
  newArr2.splice(n, 0, ...arr1);
  return newArr2;
  
  // kenapa gk one line magic ?
  // karena kalo kita return splice nya, array nya kosong
  // tapi kalo return HASIL splice nya, array nya ada.
}

console.log(frankenSplice([1,2,3], [4,5], 1));