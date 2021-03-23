import { encoders } from "./encoders.js";

export const cipher = (
  offset,
  word,
  buttonName,
  elementWord,
  elementNumber,
  alertWord,
  alertNumber
) => {
  if (word.length === 0) {
    elementWord.classList.add("error");
    alertWord.innerHTML = "Ops, faltou preencher.";
  }
  if (offset.length === 0) {
    elementNumber.classList.add("error");
    alertNumber.innerHTML = "Ops, faltou preencher.";
  }
  if (offset > 13) {
    elementNumber.classList.add("error");
    alertNumber.innerHTML = "O número escolhido é maior que 13, tente trocá-lo";
    throw new TypeError("Número escolhido é maior que 13", "cipher.js", 11);
  } else {
    const upperLetter = word.toUpperCase();
    const numberOffset = Number(offset);
    const mainArea = document.querySelector(".result-container");
    const elementCreated = document.createElement("div");
    elementCreated.classList.add("code-text");

    if (buttonName === "Criptografar") {
      const encodeText = encoders.encode(numberOffset, upperLetter);

      if (encodeText && word.length !== 0 && offset.length !== 0) {
        const text = document.createTextNode(`${encodeText}`);
        elementCreated.appendChild(text);
        mainArea.appendChild(elementCreated);
      }
    } else if (buttonName === "Descriptografar") {
      const decodeText = encoders.decode(numberOffset, upperLetter);

      if (decodeText && word.length !== 0 && offset.length !== 0) {
        const text = document.createTextNode(`${decodeText}`);
        elementCreated.appendChild(text);
        mainArea.appendChild(elementCreated);
      }
    }
  }
};
