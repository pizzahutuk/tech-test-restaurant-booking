import { hello } from ".";

describe("test", () => {
  test("add", () => {
    expect(hello()).toEqual("hello");
  });
});
