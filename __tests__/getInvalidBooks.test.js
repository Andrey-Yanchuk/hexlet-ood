// __tests__/getInvalidBooks.test.js
import { getInvalidBooks } from "../src/index.js";
/*-----------------------------------------------------*/
describe("Testing the getInvalidBooks function", () => {
  test("with correctly values", () => {
    expect(
      getInvalidBooks([
        { name: "book", author: "author" },
        { author: "author 2" },
      ]),
    ).toEqual([{ author: "author 2" }]);
  });
  test("with invalid values", () => {
    expect(() => getInvalidBooks(123)).toThrow(
      "books must be type data 'array'!",
    );
    expect(() =>
      getInvalidBooks([
        { name: "book", author: null },
        { author: "author 2" },
        123,
      ]),
    ).toThrow("array elements must be objects!");
    expect(() =>
      getInvalidBooks(
        [
          { name: "book", author: "Lev Nikolaevich Tolstoy" },
          { author: "Nikolai Vasilievich Gogol" },
        ],
        123,
      ),
    ).toThrow("allowedGenres must be a non-empty array!");
  });
  test("with empty values", () => {
    expect(() => getInvalidBooks()).toThrow("books must be type data 'array'!");
  });
  test("with empty book array", () => {
    expect(getInvalidBooks([])).toEqual([]);
  });
  test("with invalid and valid genre", () => {
    expect(
      getInvalidBooks(
        [{ name: "book", author: "author", genre: "unknown" }],
        ["fantasy", "horror"],
      ),
    ).toEqual([{ name: "book", author: "author", genre: "unknown" }]);
    expect(
      getInvalidBooks(
        [{ name: "book", author: "author", genre: "fantasy" }],
        ["fantasy", "horror"],
      ),
    ).toEqual([]);
  });
});
