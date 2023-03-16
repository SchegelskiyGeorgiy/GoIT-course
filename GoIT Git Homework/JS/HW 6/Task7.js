function anClean(arr) {

   var newArr = arr.reduce(function (total, current) {
      return total.concat([...current.toLowerCase()].sort().join(''));

   }, []);

   var tempArray = [];
   var arrayOfItems = [];
   newArr.forEach(function (item, i) {
      if (tempArray.indexOf(item) < 0) {
         tempArray = [...tempArray].concat(item);
         arrayOfItems = [...arrayOfItems].concat(i);
      }
   });

   var finalArray = [];
   for (var i = 0; i < arrayOfItems.length; i++) {
      finalArray[i] = arr[arrayOfItems[i]];
   }

   console.log(newArr);

   return finalArray;
}

var array = ['воз', 'киборг', 'корсет', 'ЗОВ', 'парк', 'гробик', 'костер', 'крап', 'сектор'];


console.log(anClean(array)); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'

