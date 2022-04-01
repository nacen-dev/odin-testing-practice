import { calculator } from "./calculator";

const { add, subtract, multiply, divide } = calculator;

test("add", () => {
  expect(add(1, 2)).toEqual(3);
});
test("subtract", () => {
  expect(subtract(10, 1)).toEqual(9);
});
test("multiply", () => {
  expect(multiply(4, 4)).toEqual(16);
});
test("divide", () => {
  expect(divide(100, 5)).toEqual(20);
});
