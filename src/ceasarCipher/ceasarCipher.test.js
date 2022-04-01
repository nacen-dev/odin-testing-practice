import { ceasarCipher } from "./ceasarCipher";

test("ceasarCipher on lowercase letters", () => {
  expect(ceasarCipher("abz", 1)).toEqual("bca");
});
test("ceasarCipher on uppercase letters", () => {
  expect(ceasarCipher("ABZ", 1)).toEqual("BCA");
});
test("ceasarCipher on uppercase, lowercase and a punctuation", () => {
  expect(ceasarCipher("a, ADFZ, c", 1)).toEqual("b, BEGA, d");
});
