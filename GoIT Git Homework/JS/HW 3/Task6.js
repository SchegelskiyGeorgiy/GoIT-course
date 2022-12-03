function pow(int, power) {
   var intInPower = 1;
   for (var i = 0; i < power; i++) {
      intInPower *= int;
   }
   return intInPower;
}

var number = +prompt('Enter a positive number', '');
var power = +prompt('Enter a positive power', '');

console.log(pow(number, power));