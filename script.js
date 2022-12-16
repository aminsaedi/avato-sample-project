class FormHandler {
  constructor(formProperty) {
    this.formProperty = formProperty;
  }

  onSubmit(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value || "N/A";
    alert(
      `Form was submitted with formProperty value: ${this.formProperty} and name value: ${name}`
    );
  }

  onToolbarClick(event) {
    alert(
      `${event.target.innerHTML} was clicked with formProperty value: ${this.formProperty}`
    );
  }
}

const form = document.querySelector(".form");
const formHandler = new FormHandler("some value");
form.addEventListener("submit", formHandler.onSubmit.bind(formHandler));

const toolbarButtons = document.querySelectorAll(".button");
toolbarButtons.forEach((button) =>
  button.addEventListener("click", formHandler.onToolbarClick.bind(formHandler))
);
