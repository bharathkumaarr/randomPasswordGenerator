const passwordBox = document.getElementById('password');
const lengthOfPass = 16;
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '~!@#$%^&()-_=+[{]}\|,<>/?*'

function createPassword(){
    let password = '';
    while(lengthOfPass>password.length) {
        password+=uppercase[Math.floor(Math.random()*uppercase.length)];
        password+=lowercase[Math.floor(Math.random()*lowercase.length)];
        password+=numbers[Math.floor(Math.random()*numbers.length)];
        password+=specialChars[Math.floor(Math.random()*specialChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
    alert("Password copied to clipboard!");
}