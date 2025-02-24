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
