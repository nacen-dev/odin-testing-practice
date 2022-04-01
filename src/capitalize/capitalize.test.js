import { capitalize } from "./capitalize";

test("capitalize", () => {
  expect(capitalize("vincent")).toEqual("Vincent");
});

test("capitalize", () => {
  expect(capitalize("")).toEqual("");
});

test("capitalize", () => {
  expect(capitalize("a")).toEqual("A");
});