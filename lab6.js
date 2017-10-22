function checkAge() {
	var age = document.getElementById('age').value;
	var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
	return regEx.test(age);
}

function checkName() {
	var name = document.getElementById('name').value;
	var regEx = new RegExp('^[a-zA-Z ]+$');
	return regEx.test(name);
}

function checkEmail() {
	var email = document.getElementById('email').value;
	var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regEx.test(email);
}

function validate() {
	console.log('validating...');
	console.log(checkName());
	console.log(checkEmail());
	console.log(checkAge());
}