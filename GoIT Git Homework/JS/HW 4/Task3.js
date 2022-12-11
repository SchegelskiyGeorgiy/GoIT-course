function checkLength(string) {
   if (string.length > 20) {
      var newString = string.substring(0, 20);
      console.log(newString + '...');
   } else {
      console.log(string);
   }
}

checkLength('12345678901234567890Hello World!');
checkLength('Hello world');