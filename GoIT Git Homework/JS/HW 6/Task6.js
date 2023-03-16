function unique(array) {
   var uniqueArray = [];
   array.forEach(function (element) {
      if (uniqueArray.indexOf(element) < 0) {
         uniqueArray = uniqueArray.concat(element);
      }
   });
   return uniqueArray;
}


var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()'];



console.log(unique(strings)); // кришна, харе, 8-()
