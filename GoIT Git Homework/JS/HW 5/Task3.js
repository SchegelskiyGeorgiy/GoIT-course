function addTogether(array) {
   var sum = 0;
   for (var i = 0; i < array.length; i++) {
      sum += array[i];
   }
   return sum;
}

var toSum = [];
var userInt, i = 0;
while (!isNaN(userInt = prompt('Enter a number'))) {
   if (userInt === null || userInt === '') {
      break;
   } else {
      toSum[i++] = +userInt;
   }
}

console.log(addTogether(toSum));
console.log(toSum);