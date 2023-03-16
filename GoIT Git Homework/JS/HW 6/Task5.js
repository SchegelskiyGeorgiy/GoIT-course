function isPal(string) {
   var newString = string.toLowerCase().split(' ').join('').split('').reverse().join('');

   if (newString === string.toLowerCase().split(' ').join('')) {
      return 'true';
   } else {
      return 'false';
   }

   return 'Weird shit!';
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
