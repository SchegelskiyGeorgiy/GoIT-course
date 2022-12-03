var userNumber;

while (isNan(userNumber = +prompt('Enter a number > than 100')) || userNumber <= 100) {
   alert('Try again');
}
console.log(userNumber);