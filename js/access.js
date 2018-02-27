function validatePassword() {
	password = document.getElementById("psw").value;
	if(password == 'm3ow') {
		window.location.href = "home";
	}
	else {
		document.getElementById("password").className += " animated shake";
		setTimeout(() => { document.getElementById("password").className = "item"; }, 500);
	}
}

function enterHandler(event) {
	if (event.key == 'Enter') {
		event.preventDefault();
		validatePassword();
	}
}