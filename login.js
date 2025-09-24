 const email = document.querySelector(".email-input");
  const password = document.querySelector(".password-input");
  const submitBtn = document.querySelector(".login-btn");
  let email_container=document.querySelector('.email-container');
  function isValidEmail(mail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  }
  function triggerShake(input) {
    input.classList.add("shake");
    setTimeout(() => input.classList.remove("shake"), 300);
  }
  function checkInputs() {
    const emailVal = email.value.trim();
    const passVal = password.value.trim();
    // Email validation
    if (emailVal === "") {
      email.classList.remove("invalid", "valid");
      email_container.classList.add('change-color');

    } else if (isValidEmail(emailVal)) {
      email.classList.add("valid");
      email.classList.remove("invalid");
       email_container.classList.add('change-correct');
    } else {
      if (!email.classList.contains("invalid")) triggerShake(email);
      email.classList.add("invalid");
      email.classList.remove("valid");
    }
    // Password validation
    if (passVal === "") {
      if (!password.classList.contains("invalid") && password.value.length === 0) {
        triggerShake(password);
      }
      password.classList.add("invalid");
      password.classList.remove("valid");
    } else {
      password.classList.add("valid");
      password.classList.remove("invalid");
    }
    // Button activation
    if (isValidEmail(emailVal) && passVal !== "") {
      submitBtn.classList.add("active");
      submitBtn.disabled = false;
    } else {
      submitBtn.classList.remove("active");
      submitBtn.disabled = true;
    }
  }
  email.addEventListener("input", checkInputs);
  password.addEventListener("input", checkInputs);
  // On submit attempt
  