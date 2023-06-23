"use strict";

const btnClaim = document.querySelector(".claim");
const inputs = document.querySelectorAll("input");

btnClaim.addEventListener("click", (e) => {
  e.preventDefault();
  inputs.forEach((inp) => {
    if (inp.value.trim() === "") {
      inp.closest(".input-parent").classList.add("error");
      inp.placeholder = "";
      inp
        .closest(".input-parent")
        .querySelector("span").textContent = `${inp.name} cannot be empty`;
    } else if (
      inp.name === "Email" &&
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inp.value)
    ) {
      inp.closest(".input-parent").classList.add("error");
      inp.style.color = "hsl(0, 100%, 74%)";
      inp.closest(".input-parent").querySelector("span").textContent =
        "Looks like this is not an email";
    } else {
      inp.closest(".input-parent").classList.remove("error");
    }
  });
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.closest(".input-parent").classList.contains("error")) {
      input.closest(".input-parent").classList.remove("error");
      input.placeholder = input.name;
      inp.style.color = "hsl(249, 10%, 26%)";
    }
  });
});
