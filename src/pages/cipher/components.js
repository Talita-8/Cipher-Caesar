export const cipherFrame = `
    <div class="user-input-container">
      <label for="">
        Frase ou palavra
        <textarea class="user-input-phrase" cols="30" rows="4" maxlength="400" placeholder="Digite..."></textarea>
        <p class="alert-area"></p>
      </label>
      
      <label for="">
       Deslocamento (De 1 a 13)
        <input class="user-input-number" type="number" placeholder="0" min="1" max="13">
        <p class="alert-area-number"></p>
      </label>
      <button class="code-button">Criptografar</button>
      <button class="change-to-decode">Precisa descriptografar? Clique aqui</button>
    </div>
`;
