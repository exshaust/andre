const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	fetch('login.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: `username=${username}&password=${password}`
	})
	.then(response => response.text())
	.then((message) => {
		if (message === 'uccess') {
			window.location.href = 'dashboard.html';
		} else {
			errorMessage.textContent = message;
		}
	})
	.catch((error) => {
		errorMessage.textContent = 'An error occurred. Please try again.';
	});
});