function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in both fields.');
        return false;
    }

    // Here, you can add more validation, such as checking the format of the username or password.

    return true;
}
