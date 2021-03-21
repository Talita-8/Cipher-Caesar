import { cipher } from "./cipher.js";

export const inputEvents = {
  keyPress: (eventClicked, alert) => {
    eventClicked.addEventListener("keypress", () => {
      const key = event.keyCode;
      const element = event.path[0];

      element.classList.remove("error");
      if (key >= 48 && key <= 57) {
        return (alert.innerHTML = "Não utilize números");
      } else return (alert.innerHTML = " ");
    });
  },

  numbChoose: (eventClicked, alert) => {
    eventClicked.addEventListener("blur", (eventClicked) => {
      const element = eventClicked.path[0];
      const number = eventClicked.path[0].value;

      element.classList.remove("error");
      if (number > 13) {
        return (alert.innerHTML = "Lembre-se: De 1 a 13");
      } else return (alert.innerHTML = " ");
    });
  },

  codeButton: (
    event,
    eventClicked,
    elementWord,
    elementNumber,
    alertWord,
    alertNumber
  ) => {
    event.preventDefault();
    eventClicked.addEventListener("click", (event) => {
      const word = elementWord.value;
      const offset = elementNumber.value;
      const buttonName = event.target.innerHTML;

      cipher(
        offset,
        word,
        buttonName,
        elementWord,
        elementNumber,
        alertWord,
        alertNumber
      );
    });
  },

  changeButton: (event, eventClicked, button) => {
    event.preventDefault();
    eventClicked.addEventListener("click", () => {
      if (button.innerHTML === "Criptografar") {
        button.innerHTML = "Descriptografar";
        eventClicked.innerHTML = "Precisa criptografar? Clique aqui";
      } else if (button.innerHTML === "Descriptografar") {
        button.innerHTML = "Criptografar";
        eventClicked.innerHTML = "Precisa descriptografar? Clique aqui";
      }
    });
  },
};
