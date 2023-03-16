var arr = ['HTML', 'JavaScript', 'CSS'];
var arrSorted = arr.slice().sort();

console.log(arr);
console.log(arrSorted);

// ! Очень удобный способ клонирования массива 
// ! newArray = [...array];
// ? В таком случае создаётся клон, а не просто указатель

var newArr = ['Cat', 'Santa', 'Parrot', 'Electro'];
var newArrSorted = [...newArr].sort();

console.log(newArr);
console.log(newArrSorted);