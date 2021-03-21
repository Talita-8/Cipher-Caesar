import { caesarQuotes } from "./quotes.js";

export const pickQuote = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  const randomOffset = Math.floor(Math.random() * 13) + 1;
  const quote = caesarQuotes[randomNumber];

  function encodeAndSeparate(offset, string) {
    const stringUpper = string.toUpperCase()
    let unicodeLetter = " ";
    let encoded = [];
    
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
      if(encoded[i] === " "){
        document.querySelector(".char-container").innerHTML += `
        <input type="text" class="hidden-input" disabled="disabled">
      `
      } else
        document.querySelector(".char-container").innerHTML += `
        <input type="text" class="input-letter" data-letter="${stringUpper[i]}" placeholder="${encoded[i]}">
      `
    } 
  };

  const checkInput = () => {
    document
    .querySelectorAll(".input-letter")
    .forEach((letter) => {
      letter.addEventListener("keyup", () => {
         const value = letter.value.toUpperCase();
         const rightAnswer = letter.dataset.letter
         if(value !== rightAnswer){
           letter.classList.add("error")
         }
         else {
           letter.classList.remove("error")
           letter.classList.add("right-answer")
         }
      })
       
    })
  };

   encodeAndSeparate(randomOffset, quote);
   checkInput();
};
