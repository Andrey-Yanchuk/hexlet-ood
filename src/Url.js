// src/Url.js
/*-----------------------------------------------------*/
export class Url {
  constructor(http) {
    if (typeof http !== "string")
      throw new Error("http must be type data 'string'!");
    try {
      this.url = new URL(http);
    } catch {
      throw new Error(`Incorrectly URL: ${http}`);
    }
  }
  getScheme() {
    return this.url.protocol.replace(":", "");
  }
  getHostName() {
    return this.url.hostname;
  }
  getQueryParams() {
    // Преобразуем параметры запроса(URLSearchParams) в объект key-value
    return Object.fromEntries(this.url.searchParams.entries());
  }
  getQueryParam(name, dafaultValue = null) {
    if (this.url.searchParams.has(name)) return this.url.searchParams.get(name);
    return dafaultValue;
  }
  equals(url) {
    return this.url.toString() === url.url.toString();
  }
}
// const url = new Url('http://yandex.ru:80?key=value&key2=value2');
// console.log(url.getScheme()); // 'http'
// console.log(url.getHostName()); // 'yandex.ru'
// console.log(url.getQueryParams());
// // {
// //   key: 'value',
// //   key2: 'value2',
// // };
// console.log(url.getQueryParam('key')); // 'value'
// // второй параметр - значение по умолчанию
// console.log(url.getQueryParam('key2', 'lala')); // 'value2'
// console.log(url.getQueryParam('new', 'ehu')); // 'ehu'
// console.log(url.getQueryParam('new')); // null
// console.log(url.equals(new Url('http://yandex.ru:80?key=value&key2=value2'))); // true
// console.log(url.equals(new Url('http://yandex.ru:80?key=value'))); // false
