const observer = new ObserverHandler();
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const validate = { username: false, password: false };

document.addEventListener("DOMContentLoaded", (e) => {
  observer.subscribe((value) =>
    Validation(usernameInput, "USERNAME", "username", "artin", "usernameSpan")
  );
  observer.subscribe((value) =>
    Validation(
      passwordInput,
      "PASSWORD",
      "password",
      "password",
      "passwordSpan"
    )
  );
});

usernameInput.addEventListener("keyup", (event) => {
  observer.notify(event.target.value);
});
passwordInput.addEventListener("keyup", (event) => {
  observer.notify(event.target.value);
});

function Validation(data, text, InputId, InputValue, InputClass) {
  const response = document.querySelector(`.${InputClass}`);
  if (data.id === InputId) {
    if (data.value === InputValue) {
      response.textContent = `${text} IS CORRECT !`;
      response.classList.remove("error");
      response.classList.add("success");
      data.disabled = true;
      validate[InputId] = true;
    } else {
      response.textContent = `${text} IS INCORRECT !`;
      response.classList.remove("success");
      response.classList.add("error");
      validate[InputId] = false;
    }
  } else {
    response.textContent = `${text} IS EMPTY !`;
    response.classList.remove("success");
    response.classList.add("error");
    validate[InputId] = false;
  }
  validate["username"] && validate["password"] ? alert("success") : "";
}
