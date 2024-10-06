function generatePassword(length) {
    const chars ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !@#$%^&*()_+-=";
    let password ="";

    for (let i = 0; i < length; i++) {
        password = password + chars[Math.floor(Math.random()* chars.length)];
    }
    document.getElementById("generatedPassword").innerHTML=password;
}