const buttons = document.querySelectorAll(".favorite-icon");


buttons.forEach(button => {

  button.addEventListener("click", () => {

    if (!button.classList.contains("filled")) {

      button.classList.add("filled");
      button.innerHTML = "&#10084;";

    } else {

      button.classList.remove("filled");
      button.innerHTML = "&#9825;";
    }
  });
});
