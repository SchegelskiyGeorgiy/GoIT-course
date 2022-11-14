var userLogin = prompt('Enter you login');
var password = 'passw0rd';

if (userLogin == 'admin' || userLogin == 'Admin' || userLogin == 'ADMIN') {
	var userPassword = prompt('Ok. What is the password?');
	if (userPassword == password) {
		alert ('Welcome home!');
	} else if (userPassword == (null)) {
		alert ('Canceled');
	} else {
		alert ('Acess denied');
	}
} else if (userLogin == (null)) {
	alert ('Canceled');
} else {
	alert ('Acess denied');
}
