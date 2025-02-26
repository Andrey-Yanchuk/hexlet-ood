// __tests__/normalize.test.js
import { normalize } from "../src/index.js";
/*-----------------------------------------------------*/
describe("Testing the normalize function", () => {
  test("with correctly values", () => {
    expect(
      normalize([
        { name: "Miami", country: "usa" },
        { name: "samarA", country: "  ruSsiA" },
        { name: "Moscow ", country: " Russia" },
      ]),
    ).toEqual({
      russia: ["moscow", "samara"],
      usa: ["miami"],
    });
  });
  test("with invalid values", () => {
    expect(() => normalize(123)).toThrow(
      "countries must be type data 'array'!",
    );
    expect(() => normalize([])).toThrow("countries must be type data 'array'!");
  });
  test("with empty argument", () => {
    expect(() => normalize()).toThrow("countries must be type data 'array'!");
  });
  test("with a property value that is not of type string", () => {
    expect(() => normalize([{ russia: undefined }])).toThrow(
      "Cannot read properties of undefined (reading 'trim')",
    );
  });
});
