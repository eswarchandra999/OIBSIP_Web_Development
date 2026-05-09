const password =
document.getElementById("password");

const togglePassword =
document.getElementById("togglePassword");

const form =
document.getElementById("loginForm");

const upper =
document.getElementById("upper");

const number =
document.getElementById("number");

const special =
document.getElementById("special");

const length =
document.getElementById("length");

// Password Validation

password.addEventListener("input", () => {

  const value = password.value;

  // Uppercase

  if(/[A-Z]/.test(value)){

    upper.style.color = "#22c55e";

    upper.innerHTML =
    "Valid: Uppercase letter added";
  }

  else{

    upper.style.color = "#ef4444";

    upper.innerHTML =
    "Invalid: One uppercase letter required";
  }

  // Number

  if(/[0-9]/.test(value)){

    number.style.color = "#22c55e";

    number.innerHTML =
    "Valid: Number added";
  }

  else{

    number.style.color = "#ef4444";

    number.innerHTML =
    "Invalid: One number required";
  }

  // Special Character

  if(/[@#$%^&*!]/.test(value)){

    special.style.color = "#22c55e";

    special.innerHTML =
    "Valid: Special character added";
  }

  else{

    special.style.color = "#ef4444";

    special.innerHTML =
    "Invalid: One special character required";
  }

  // Length

  if(value.length >= 8){

    length.style.color = "#22c55e";

    length.innerHTML =
    "Valid: Minimum character requirement met";
  }

  else{

    length.style.color = "#ef4444";

    length.innerHTML =
    "Invalid: Minimum 8 characters required";
  }

});

// Show / Hide Password

togglePassword.addEventListener("click", () => {

  if(password.type === "password"){

    password.type = "text";

    togglePassword.innerHTML = "Hide";
  }

  else{

    password.type = "password";

    togglePassword.innerHTML = "Show";
  }

});

// Form Submit

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const email =
  document.getElementById("email").value;

  const pass =
  password.value;

  const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validPassword =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*!]).{8,}$/;

  // Email Validation

  if(!emailPattern.test(email)){

    alert("Please enter a valid email address.");

    return;
  }

  // Password Validation

  if(!validPassword.test(pass)){

    alert("Password does not meet the required criteria.");

    return;
  }

  // Success Message

  alert("Sign In Successful");

});