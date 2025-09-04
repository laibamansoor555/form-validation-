
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;


  function showError(input, errorEl, message) {
    errorEl.textContent = message;
    input.classList.add("error-border");
    input.classList.remove("success-border");
    isValid = false;
  }

  function showSuccess(input, errorEl) {
    errorEl.textContent = "";
    input.classList.remove("error-border");
    input.classList.add("success-border");
  }

 
  let email = document.getElementById("email");
  let emailError = document.getElementById("emailError");
  if (email.value === "" || !email.value.includes("@")) {
    showError(email, emailError, "Invalid email");
  } else {
    showSuccess(email, emailError);
  }

  
  let fname = document.getElementById("fname");
  let fnameError = document.getElementById("fnameError");
  if (fname.value === "") {
    showError(fname, fnameError, "First name is required");
  } else {
    showSuccess(fname, fnameError);
  }

  
  let lname = document.getElementById("lname");
  let lnameError = document.getElementById("lnameError");
  if (lname.value === "") {
    showError(lname, lnameError, "Last name is required");
  } else {
    showSuccess(lname, lnameError);
  }

 
  let workshop = document.getElementById("workshop");
  let workshopError = document.getElementById("workshopError");
  if (workshop.value === "") {
    showError(workshop, workshopError, "Please select a workshop");
  } else {
    showSuccess(workshop, workshopError);
  }

  
  let mobile = document.getElementById("mobile");
  let mobileError = document.getElementById("mobileError");
  if (mobile.value === "" || mobile.value.length < 10) {
    showError(mobile, mobileError, "Mobile number must be at least 10 digits");
  } else {
    showSuccess(mobile, mobileError);
  }

 
  let telephone = document.getElementById("telephone");
  let telephoneError = document.getElementById("telephoneError");
  if (telephone.value === "") {
    showError(telephone, telephoneError, "Telephone number is required");
  } else {
    showSuccess(telephone, telephoneError);
  }


  let message = document.getElementById("message");
  let messageError = document.getElementById("messageError");
  if (message.value === "") {
    showError(message, messageError, "Message is required");
  } else {
    showSuccess(message, messageError);
  }


  if (isValid) {
    alert("Form successfully validated and ready to submit!");
  }
})
