export const encoders = {
  encode: (offset, string) => {
    let unicodeLetter = " ";
    let encoded = " ";
    for (let i = 0; i < string.length; i++) {
      unicodeLetter = string.charCodeAt(i);
      if (unicodeLetter == 32) {
        encoded += " ";
      } else if(unicodeLetter == 44	) {
        encoded += ",";
      } else if(unicodeLetter == 46) {
        encoded += ".";
      }else
        encoded += String.fromCharCode(
          ((unicodeLetter - 65 + offset) % 26) + 65
        );
    }
    return encoded;
  },

  decode: (offset, string) => {
    let unicodeLetter = " ";
    let decoded = " ";
    for (let x = 0; x < string.length; x++) {
      unicodeLetter = string.charCodeAt(x);
      if (unicodeLetter == 32) {
        decoded += " ";
      } else if(unicodeLetter == 44) {
        decoded += ",";
      } else if(unicodeLetter == 46) {
        decoded += ".";
      } else
        decoded += String.fromCharCode(
          ((unicodeLetter + 65 - offset) % 26) + 65
        );
    }
    return decoded;
  },
};
