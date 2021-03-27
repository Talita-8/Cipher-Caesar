export const clue = (letter, unicode) => {
  const clickClue = document.querySelector(".clue");
  clickClue.addEventListener("click", (clickClue) => {
    clickClue.path[0].innerHTML = `
        ${unicode} = ${letter}
       `;
  });
};
