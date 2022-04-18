import { add } from ".."

describe("example", () => {
  it("should be 42 (@)", () => {
    expect(add(1, 2)).toBe(3, "1 + 2 is 3");
  })
});
