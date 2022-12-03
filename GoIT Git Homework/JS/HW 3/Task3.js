// FizzBuzz

//* Через тернарный оператор

// for (var i = 1; i <= 100; i++) {
//    (i % 3 == 0) ? console.log('Fizz') : (i % 5 == 0) ? console.log('Buzz') : console.log(i);
// }

// * Через условные инструкции

// for (var i = 1; i <= 100; i++) {
//    if (i % 3 == 0) {
//       console.log('Fizz');
//    } else if (i % 5 == 0) {
//       console.log('Buzz');
//    } else {
//       console.log(i);
//    }
// }

//* Задача №2 - FizzBuzz

for (var i = 1; i <= 100; i++) {
   if (i % 3 == 0) {
      if (i % 5 == 0) {
         console.log('FizzBuzz');
      }
      console.log('Fizz');
   } else if (i % 5 == 0) {
      console.log('Buzz');
   } else {
      console.log(i);
   }
}