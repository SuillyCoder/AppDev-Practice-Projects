const passwordBox = document.getElementById("password");
const countDisplay = document.getElementById("counter");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "`~!@#$%^&*()_-+={[}]:;<,.>/?";
let length = 12;

const characterSet = upperCase + lowerCase + numbers + symbols;

function createPassword(){
    let password= "";
    while(length > password.length){
        password += characterSet[Math.floor(Math.random() * characterSet.length)];
    }
    passwordBox.value = password;
}

function increase(){
    length++;
    countDisplay.innerHTML = "Current Password Length: " + length;
    if (length == 21){
        alert("Password can only have up to 20 characters");
        length--;
        countDisplay.innerHTML = "Current Password Length: " + length;
    }
}
function decrease(){
    length--;
    countDisplay.innerHTML = "Current Password Length: " + length;
    if (length == 7){
        alert("Password should be at least 8 characters");
        length++;
        countDisplay.innerHTML = "Current Password Length: " + length;
    }
}

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
    
}