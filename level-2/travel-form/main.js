const form = document["travel-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let checkedPreferences = Array.from(form["diet-preferences"])
    .reduce((a, p) => {
      if (p.checked) a.push(p.value);
      return a;
    }, [])
    .join(", ");

  alert(
    `First name: ${form["first-name"].value}\n` +
      `Last name: ${form["last-name"].value}\n` +
      `Age: ${form.age.value}\n` +
      `Gender: ${form.gender.value}\n` +
      `Location: ${form.location.value}\n` +
      `Dietary restrictions: ${checkedPreferences}`
  );
});

const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("mousedown", () => {
  submitButton.style.backgroundColor = "rgba(30, 144, 255, 0.7)";
});
submitButton.addEventListener("mouseup", () => {
  submitButton.style.backgroundColor = "rgba(30, 144, 255, 1)";
});
