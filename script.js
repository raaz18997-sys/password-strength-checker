function checkStrength() {
    let password = document.getElementById("password").value;
    let message = document.getElementById("strengthMessage");

    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;

    if (strength === 0) {
        message.textContent = "";
    } else if (strength <= 2) {
        message.textContent = "Weak Password";
        message.style.color = "red";
    } else if (strength === 3) {
        message.textContent = "Medium Password";
        message.style.color = "orange";
    } else {
        message.textContent = "Strong Password";
        message.style.color = "green";
    }
}
