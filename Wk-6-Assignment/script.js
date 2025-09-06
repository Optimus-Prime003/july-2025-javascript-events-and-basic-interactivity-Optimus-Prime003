// Event Handling and Interactivity

// ===================== FORM VALIDATION ===================== //
// Custom form validation
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from refreshing

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let message = "";

  // Check if fields are empty
  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    message = "All fields are required!";
  }
  // Check if email format is valid
  else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
    message = "Please enter a valid email address.";
  }
  // Check password length
  else if (password.length < 6) {
    message = "Password must be at least 6 characters long.";
  }
  // Check if passwords match
  else if (password !== confirmPassword) {
    message = "Passwords do not match!";
  } 
  else {
    message = "✅ Signup successful!";
  }

  document.getElementById("formMessage").textContent = message;
});

// ===================== COUNTER FEATURE ===================== //
let count = 0;
document.getElementById("counterBtn").addEventListener("click", function() {
  count++;
  document.getElementById("count").textContent = count;
});

// ===================== THEME TOGGLE ===================== //
document.getElementById("toggleTheme").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});
