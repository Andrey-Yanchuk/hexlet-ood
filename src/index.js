// src/index.js
import * as yup from "yup";
// import util from "util"; // Для отображения уровня вложенности
// console.log(util.inspect(getMutualFriends(user1, user2), { depth: 5, colors: true }));
/*-----------------------------------------------------*/
export const normalize = (countries) => {
  if (!Array.isArray(countries) || countries.length === 0)
    throw new Error("countries must be type data 'array'!");
  return countries.reduce((acc, { country, name }) => {
    const normalizeCountry = country.trim().toLowerCase();
    const normalizeName = name.trim().toLowerCase();
    if (!acc[normalizeCountry]) acc[normalizeCountry] = [];
    acc[normalizeCountry].push(normalizeName);
    acc[normalizeCountry].sort();
    return acc;
  }, {});
};
/*-----------------------------------------------------*/
export const getInvalidBooks = (
  books,
  allowedGenres = ["fantasy", "horror", "drama", "comedy", "thriller"],
) => {
  if (!Array.isArray(books))
    throw new Error("books must be type data 'array'!");
  if (!books.every((book) => typeof book === "object" && book !== null))
    throw new Error("array elements must be objects!");
  if (books.length === 0) return [];
  if (!Array.isArray(allowedGenres) || allowedGenres.length === 0)
    throw new Error("allowedGenres must be a non-empty array!");
  const schema = yup.object({
    name: yup.string().required().min(1),
    author: yup.string().required().min(1),
    pagesCount: yup.number().positive().integer().optional(),
    link: yup.string().url().notOneOf([""], "Link cannot be empty!").optional(),
    genre: yup.string().oneOf(allowedGenres, "Invalid genre!").optional(),
  });
  return books.filter((book) => !schema.isValidSync(book));
};
/*-----------------------------------------------------*/
