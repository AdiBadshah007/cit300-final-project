document.getElementById("membershipForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  let valid = true;

  // Inputs

  let name = document.getElementById("name").value.trim();

  let email = document.getElementById("email").value.trim();

  let age = document.getElementById("age").value.trim();

  let gender = document.getElementById("gender").value;

  let terms = document.getElementById("terms").checked;

  // Error spans

  let nameError = document.getElementById("nameError");

  let emailError = document.getElementById("emailError");

  let ageError = document.getElementById("ageError");

  let genderError = document.getElementById("genderError");

  let termsError = document.getElementById("termsError");

  // Clear errors

  nameError.innerText = "";

  emailError.innerText = "";

  ageError.innerText = "";

  genderError.innerText = "";

  termsError.innerText = "";

  // Name validation

  if(name === ""){

    nameError.innerText = "Name is required";

    valid = false;
  }

  // Email validation

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email === ""){

    emailError.innerText = "Email is required";

    valid = false;

  } else if(!email.match(emailPattern)){

    emailError.innerText = "Enter a valid email";

    valid = false;
  }

  // Age validation

  if(age === ""){

    ageError.innerText = "Age is required";

    valid = false;

  } else if(age < 18 || age > 60){

    ageError.innerText = "Age must be between 18 and 60";

    valid = false;
  }

  // Gender validation

  if(gender === ""){

    genderError.innerText = "Please select gender";

    valid = false;
  }

  // Terms validation

  if(!terms){

    termsError.innerText = "You must agree first";

    valid = false;
  }

  // Success

  if(valid){

    alert("Form Submitted Successfully!");

    document.getElementById("membershipForm").reset();
  }

});