function verifyPassword() {
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;

    if (pass1.length < 8) {
        alert("Password must be at least 8 characters long.");
    } else if (pass1 !== pass2) {
        alert("Passwords do not match.");
    } else {
        alert("Passwords matched successfully!");
    }
}
