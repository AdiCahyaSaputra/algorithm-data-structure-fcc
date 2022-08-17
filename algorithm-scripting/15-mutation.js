function mutation(arr) {
  arr.unshift(arr[0].toLowerCase());
  arr.splice(1,1);
  arr.push(arr[1].toLowerCase());
  arr.splice(1,1);
  
  const str1 = arr[0].split('');
  let str2 = arr[1].split('');
  
  let skorTrue = [];
  
  for(let i = 0; i < str2.length; i++) {
    for(let j = 0; j < str1.length; j++) {
      if(str2[i].match(str1[j]) !== null) {
        if(str2[i] !== skorTrue[skorTrue.length -2]) {
          skorTrue.push(str2[i]);
        }
      }
    }
  }
  
  skorTrue = skorTrue.join('');
  str2 = str2.join('');
  
  if(skorTrue.length >= str2.length) {
    if(skorTrue[0] === str2[0] && skorTrue[skorTrue.length -1] === str2[str2.length -1]) {
      return true;               
    }                     
  }
  return false;
}

mutation(["hello", "Hello"]); // true
mutation(["hello", "Hey"]); // false
mutation(["voodo", "no"]); // false
mutation(["floor", "for"]); // true
