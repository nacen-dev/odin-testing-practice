const isLetter = (string) => {
  return /[a-zA-Z]/.test(string);
};

const isLowerCaseLetter = (string) => {
  return /[a-z]/.test(string);
};

const isUpperCaseLetter = (string) => {
  return /[A-Z]/.test(string);
};

const encryptLetter = (letter, offset) => {
  if (isLowerCaseLetter(letter)) {
    return String.fromCharCode(
      97 + ((letter.charCodeAt(0) - 97 + offset) % 26)
    );
  } else if (isUpperCaseLetter(letter)) {
    return String.fromCharCode(
      65 + ((letter.charCodeAt(0) - 65 + offset) % 26)
    );
  }
};

export const ceasarCipher = (string, offset) => {
  let encryptedString = "";

  for (let i = 0; i < string.length; i++) {
    if (isLetter(string[i])) {
      encryptedString += encryptLetter(string[i], offset);
    } else {
      encryptedString += string[i];
    }
  }
  return encryptedString;
};