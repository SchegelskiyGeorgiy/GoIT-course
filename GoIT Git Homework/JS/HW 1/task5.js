var userName = prompt ('Enter login'); 
var text;

// if (userName == 'admin') {
//   text = 'Hi';
// } else if (userName == 'manager') {
//   text = 'Hello';
// } else if (userName == '') {
//   text = 'No login';
// } else {
//   text = '';
// }

text = userName == 'admin' ? 'Hi' : userName == 'manager' ? 'Hello' : userName == '' ? 'No Login' : 'Get out';


alert (text);