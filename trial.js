const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

function validateForm() {
    
    var password = document.getElementById("password").value;
    var passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one capital letter, one number, and be at least 6 characters long.");
        return false;
    }

  
    var email = document.getElementById("email").value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

   
    var password = document.getElementById("password").value;
    var retypePassword = document.getElementById("retypePassword").value;
    if (password !== retypePassword) {
        alert(" Password does not match the original password.");
        return false;
    }

    var phoneNumber = document.getElementById("phoneNumber").value;
    var ghanaPhoneRegex = /^(\+233|0)(2|5|3)\d{8}$/;

    if (!ghanaPhoneRegex.test(phoneNumber)) {
        alert("Please enter a valid Ghanaian phone number.");
        return false;
    }
    return true;

    
}