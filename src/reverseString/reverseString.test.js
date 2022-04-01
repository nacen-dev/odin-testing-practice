import { reverseString } from "./reverseString";

test("reverseString", () => {
  expect(reverseString("abc")).toEqual("cba");
})

test("reverseString with space", () => {
  expect(reverseString("Cab L")).toEqual("L baC");
})

test("reverseString with two words", () => {
  expect(reverseString("Cab Car")).toEqual("raC baC");
})

test("reverseString with commas", () => {
  expect(reverseString("Cab, Car")).toEqual("raC ,baC");
})