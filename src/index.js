// src/index.js
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
