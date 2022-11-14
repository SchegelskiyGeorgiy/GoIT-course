var userNumber = prompt('Enter a number');

if (isNaN(userNumber)) {
	alert (userNumber + ' is not a number');
} else {
	if (userNumber > 0){
		alert('1');
	} else if (userNumber < 0){
		alert('-1');
	}else {
		alert ('0');
	}
}