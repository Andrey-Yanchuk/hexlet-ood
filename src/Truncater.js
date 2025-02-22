// src/Truncater.js
/*-----------------------------------------------------*/
export class Truncater {
  static defaultOptions = {
    separator: "...",
    length: 7,
  };
  constructor(options = {}) {
    if (typeof options !== "object" || options === null)
      throw new Error("options must be type data 'object'!");
    this.options = { ...Truncater.defaultOptions, ...options };
  }
  truncate(string, options = {}) {
    if (typeof string !== "string")
      throw new Error("string must be type data 'string'!");
    if (typeof options !== "object" || options === null)
      throw new Error("options must be type data 'object'!");
    const { separator, length } = { ...this.options, ...options };
    const maxLength = Number(length);
    if (Number.isNaN(maxLength))
      throw new Error("length must be a valid number!");
    if (string.length <= maxLength) return string;
    return string.slice(0, maxLength) + separator;
  }
}
