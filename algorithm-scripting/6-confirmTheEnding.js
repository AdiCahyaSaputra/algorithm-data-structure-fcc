function confirmEnd(str, target) {
  // bar² mode on
  /**
  if(str.split(' ').length == 1) {
    str = str.split('');
    target = target.split('')[target.length -1];
  } else {
    str = str.split(' ');
  }
  
  return str[str.length - 1].match(target) !== null ? true : false;
  **/
  
  // sedikit tidak bar² dan lebih rapih 
  secondStr = str.split('')[str.length -1];
  secondTarget = target.split('')[target.length -1];
  str = str.split(' ');
  
  return str[str.length - 1].match(target) !== null && secondStr.match(secondTarget) !== null ? true : false;

}

/**
 * Penjelasan buat yg kode tidak bar² / sedikit rapih
 * str = buat nge split str yang ada spasi nya (yg gk ada juga bisa sih)
 * secondStr = buat nge split str yg gk ada spasi nya (hasil nya beda sama str)
 * secondTarget = buat nge split str target 
 * 
 * kondisi pertama
 * str yg index paling ujung, apakah match sama target (yg gk displit) ?
 * kondisi ke dua
 * apakah ketika str di split menjadi 1 huruf 1 huruf (secondStr), itu masih bisa match sama target yang juga udh di split dan di ambil yg paling ujung (secondTarget) ?                          
 * 
 * jika kondisi pertama itu true udh pasti kondisi ke dua nya juga true
 * tapi jika kondisi kedua nya true belum tentu kondisi pertama nya true juga
 * 
**/

console.log(confirmEnd("Bastian", "n")); // true
console.log(confirmEnd("Congratulation", "on")); // true
console.log(confirmEnd("Connor", "n")); // false
console.log(confirmEnd("Walking on water and developing software from a specification are easy if both are frozen", "specification")); // false
console.log(confirmEnd("He has to give me a new name", "name")); // true                 
console.log(confirmEnd("Open sesame", "same")); // true                 
console.log(confirmEnd("Open sesame", "sage")); // false                
console.log(confirmEnd("Open sesame", "game")); // false            
console.log(confirmEnd("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); // false                 
console.log(confirmEnd("Abstraction", "action")); // true       

/**
 * 
 * PENJELASAN LANUUTAN
 * 
**/
console.log(confirmEnd("Abstraction", "gamen"));

/**
 * Kondisi kedua = true karena ngebandingin ujung sama ujung
 * tapi
 * kondisi pertama = false karena ngebandingin satu str full
**/