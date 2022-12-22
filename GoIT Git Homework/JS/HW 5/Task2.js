function multiplyNumeric(object) {
   for (var item in object) {
      if (!isNaN(object[item])) {
         object[item] *= 2;
      } else {
         continue;
      }
   }
   return object;
}

var image = {
   width: 100,
   height: 400,
   title: 'Cool image'
};

console.log(image);
console.log(multiplyNumeric(image));