import { add } from "./index";
import { subtract } from "./index";
import { multiply } from "./index";
import { divide } from "./index";
// add tests//
test("adds the numbers 2,3 and return 5", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
test("adds return the negative number if greater arg is negative,", () => {
  const result = add(-5, 2);
  expect(result).toBeLessThan(0);
});
test("adds return a value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

// sub tests//
test("returns 10 if called with subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});
test("returns a negative value if the second argument is greater than the first one", () => {
  const result = subtract(5, 15);
  expect(result).toBeLessThan(0);
});

//multi tests//
test("returns 8 if called with multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});
test("returns a negative value if only the first argument is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});
test("returns a negative value if only the second argument is negative", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});
test("returns a positive value if called with two negative arguments", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});

//divide tests //
test("returns 3 if called with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
test("returns 'You should not do this!' if called with 0 as second argument", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
