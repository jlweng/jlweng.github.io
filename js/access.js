function validatePassword() {
	password = document.getElementById("psw").value;
	if(password == 'm3ow') {
		window.location.href = "home.html";
	}
}

function enterHandler(event) {
	if (event.key == 'Enter') {
		event.preventDefault();
		validatePassword();
	}
}