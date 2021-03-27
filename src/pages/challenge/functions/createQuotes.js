import { caesarQuotes } from "./quotes.js";
import { clue } from "./clue.js";

export const pickQuote = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const randomOffset = Math.floor(Math.random() * 13) + 1;
  const quote = caesarQuotes[randomNumber];

  function encodeAndSeparate(offset, string) {
    const stringUpper = string.toUpperCase();
    let unicodeLetter = " ";
    let encoded = [];
    let oneLetter = " ";
    let oneCode = " ";

    for (let i = 0; i < stringUpper.length; i++) {
      unicodeLetter = stringUpper.charCodeAt(i);
      if (unicodeLetter == 32) {
        encoded.push(" ");
      } else if (unicodeLetter == 44) {
        encoded.push(",");
      } else if (unicodeLetter == 46) {
        encoded.push(".");
      } else {
        encoded.push(
          String.fromCharCode(((unicodeLetter - 65 + offset) % 26) + 65)
        );
      }
      oneLetter = stringUpper[i]
      oneCode = encoded[i]

        encoded[i] === " " ?
        document.querySelector(".char-container").innerHTML += `
        <input type="text" class="hidden-input" disabled="disabled">
      ` :
        document.querySelector(".char-container").innerHTML += `
        <input type="text" class="input-letter" 
        data-letter="${stringUpper[i]}" 
        placeholder="${encoded[i]}">
      `;
    }
    clue(oneLetter, oneCode);
  }

  const checkInput = () => {
    document.querySelectorAll(".input-letter").forEach((letter) => {
      letter.addEventListener("keyup", () => {
        const value = letter.value.toUpperCase();
        const rightAnswer = letter.dataset.letter;
         value !== rightAnswer ?
          letter.classList.add("error")
          :
          letter.classList.remove("error")
          letter.classList.add("right-answer")
      });
    });
  };

  encodeAndSeparate(randomOffset, quote);
  checkInput();
};
