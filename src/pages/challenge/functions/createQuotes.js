import { caesarQuotes } from "./quotes.js";

export const pickQuote = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  const randomOffset = Math.floor(Math.random() * 13) + 1;
  const quote = caesarQuotes[randomNumber];

  function encodeAndSeparate(offset, string) {
    let unicodeLetter = " ";
    let encoded = [];
    let originalString = [];

    for (let i = 0; i < string.length; i++) {
      unicodeLetter = string.charCodeAt(i);
      if (unicodeLetter == 32) {
        encoded.push(" ");
        originalString.push(" ");
      } else if (unicodeLetter == 44) {
        encoded.push(",");
        originalString.push(",");
      } else if (unicodeLetter == 46) {
        encoded.push(".");
        originalString.push(".");
      } else {
        encoded.push(
          String.fromCharCode(((unicodeLetter - 65 + offset) % 26) + 65)
        );
        originalString.push(string[i]);
      }
      if(encoded[i] === " "){
        document.querySelector(".char-container").innerHTML += `
        <input type="text" class="hidden-input" disabled="disabled">
      `
      }
      else
      document.querySelector(".char-container").innerHTML += `
        <input type="text" placeholder="${encoded[i]}">
      `
    }
    
  }
   encodeAndSeparate(randomOffset, quote);
};
