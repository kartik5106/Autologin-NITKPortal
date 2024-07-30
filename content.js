const username = "username";
const password = "user-password";

window.onload = function() {
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");
  const submitButton = document.getElementById("loginbtn");

  if (usernameField && passwordField) {
    usernameField.value = username;
    passwordField.value = password;
    
    if (submitButton) {
      submitButton.click();
    } else {
      console.error("Submit button not found");
    }
  } else {
    console.error("Username or password field not found");
  }
};
