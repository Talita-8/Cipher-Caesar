import { cipherFrame } from "./cipher/components.js";
import { inputEvents } from "./cipher/functions/inputs.js";
import { aboutFrame } from "./about/components.js";
import { howFrame } from "./how/components.js";
import { challengeFrame } from "./challenge/components.js";
import { pickQuote } from "./challenge/functions/createQuotes.js"

export const listenerButton = (eventClick) => {

  const mainArea = document.querySelector("#root");
  eventClick.addEventListener("click", (event) => {

    if (event.target.innerHTML === "O que é?") {
      mainArea.innerHTML = aboutFrame;
    }
    else if (event.target.innerHTML === "Como funciona?") {
      mainArea.innerHTML = howFrame;
    }
    else if (event.target.innerHTML === "Vamos testar?") {
      mainArea.innerHTML = cipherFrame;

      const wordInput = document.querySelector(".user-input-phrase");
      const numberInput = document.querySelector(".user-input-number");
      const alertWord = document.querySelector(".alert-area");
      const alertNumber = document.querySelector(".alert-area-number");
      const button = document.querySelector(".code-button");
      const changeBtn = document.querySelector(".change-to-decode");

      inputEvents.keyPress(wordInput, alertWord);
      inputEvents.numbChoose(numberInput, alertNumber);
      inputEvents.codeButton(
        event,
        button,
        wordInput,
        numberInput,
        alertWord,
        alertNumber
      );
      inputEvents.changeButton(event, changeBtn, button);
    }
    else if (event.target.innerHTML === "Desafio de lógica") {
      mainArea.innerHTML = challengeFrame;
      pickQuote();
    }
  })
};
