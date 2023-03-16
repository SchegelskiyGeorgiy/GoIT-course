function removeClass(object, cls) {
   var classArr;

   for (var key in object) {
      classArr = object[key].split(' ');

      while (classArr.indexOf(cls) >= 0) {
         var i = classArr.indexOf(cls);
         classArr.splice(i, 1);
         object[key] = classArr.join(' ');
      }
   }
   console.log(object);
}

var obj = {
   className: 'menu open menu open menu'
};

removeClass(obj, 'menu');
removeClass(obj, 'blabla');


