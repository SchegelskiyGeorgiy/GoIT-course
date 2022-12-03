var numberMax;

while (isNaN(numberMax = +prompt('Enter a number > than 1')) || numberMax <= 1) {
   alert('Try again');
}
console.log('You have set a limit to ' + numberMax);
console.log('Simple numbers are as follows:');

simple: for (var numberNow = 2, divisorMax; numberNow <= numberMax; numberNow++) {
   divisorMax = numberNow - 1;
   for (var divisorNow = 2; divisorNow <= divisorMax; divisorNow++) {
      if (numberNow % divisorNow === 0) {
         continue simple;
      }
   }
   console.log(numberNow);
}

console.log('That\'s it');