let form = document.querySelector("#airline-form");

function formAlert(e) {
  e.preventDefault();
  let firstName = form["first-name"].value;
  let lastName = form["last-name"].value;
  let age = form["age"].value;
  let gender = form["gender"].value;
  let location = form["travel-location"].value;
  let diet;
  if (form["vegan"].checked) {
    diet = document.getElementById("vegan").value;
  }
  if (form["gluten"].checked) {
    diet = document.getElementById("gluten").value;
  }
  if (form["paleo"].checked) {
    diet = document.getElementById("paleo").value;
  }

  alert(
    "First Name: " +
      firstName +
      "\nLast Name: " +
      lastName +
      "\nAge: " +
      age +
      "\nGender: " +
      gender +
      "\nTravel Location: " +
      location +
      "\nDiet: " +
      diet +
      "\nAwesome, now if you die, it won't be an accident.."
  );
}

form.addEventListener("submit", formAlert);
