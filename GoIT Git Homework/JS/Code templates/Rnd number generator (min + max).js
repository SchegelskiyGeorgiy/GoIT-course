//    Задача - генератор чисел с кастомным максимумом и минимумом

//    РЕАЛИЗАЦИЯ:
//    - Запросить максимум, минимум, передать в функцию, проверить количество цифр
//    - Используя Math.pow, записать в переменную 10-чный максимум(сколько тысячных)
//    - Сгенерировать случайное число, умножить на 10-чный максимум и проверить
//    что оно не выше заходит за минимум и максимум
//    - Вывести случайное число на экран 
//    - Повторить 10 раз в целях отладки 

function superRandom(min, max) {
   var divisor = Math.pow(10, max.toString().length);
   var result;
   do {
      result = Math.random();
   } while (result * divisor > max || result * divisor < min);
   return Math.round(result * divisor);
}

var setMin = +prompt('Set minimum for a random range')
var setMax = +prompt('The maximum is');

// Удалить цикл, если всё работает верно
for (var i = 0; i < 10; i++) {
   console.log(superRandom(setMin, setMax));

}