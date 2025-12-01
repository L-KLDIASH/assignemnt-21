// 1

const form = document.registrationId("user-registration-form");

const personalNumber = document.registrationId("personal-number");
emailInput = document.registrationId("email");
passwordInput = document.registrationId("password");

// 2

function isPersonalNumberValid() {
  const value = personalNumber.value.trim();
  const digitsOnlyRegex = /^\d+$/;

  if (value.length === 0) {
    showErrors(personalNumber, "Personal number is required");
  } else if (!digitsOnlyRegex.test(value)) {
    showErrors(personalNumber, "Personal number must contain only digits");
  } else if (value.length !== 11) {
    showErrors(personalNumber, "Personal number must be exactly 11 digits");
  } else {
    hideErrors(personalNumber, "everything is good");
    return true;
  }
}

// 3

function isEmailValid() {
  const value = emailInput.value.trim();

  if (value.length === 0) {
    showErrors(emailInput, "Email is required");
  } else if (!value.endsWith("@gmail.com")) {
    showErrors(emailInput, "Email must end with @gmail.com");
  } else {
    hideErrors(emailInput, "Thank you!");
    return true;
  }
}

// 4

function isPasswordValid() {
  const value = passwordInput.value.trim();

  if (value.length === 0) {
    showErrors(passwordInput, "Password is required");
  } else if (value.length < 8) {
    showErrors(passwordInput, "Password must be at least 8 characters");
  } else {
    hideErrors(passwordInput, "Valid!");
    return true;
  }
}
