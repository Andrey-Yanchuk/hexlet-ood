// __tests__/url.test.js
import { Url } from "../src/Url.js";
/*-----------------------------------------------------*/
describe("Testing the class Url", () => {
  let url;
  beforeEach(() => {
    url = new Url("http://yandex.ru:80?key=value&key2=value2");
  });
  test("to create an instance", () => {
    // Проверяем, что это экземпляр класса Url
    expect(url).toBeInstanceOf(Url);
    // Проверяем, что свойство url является объектом URL
    expect(url.url).toBeInstanceOf(URL);
    // Проверяем, что строка URL соответствует ожидаемой
    expect(url.url.toString()).toBe("http://yandex.ru/?key=value&key2=value2");
  });
  test("with invalid arguments", () => {
    expect(() => new Url(123)).toThrow("http must be type data 'string'!");
    expect(() => new Url("not-a-url")).toThrow("Incorrectly URL: not-a-url");
  });
  describe("Testing the method getScheme", () => {
    test("with correctly values", () => {
      expect(url.getScheme()).toBe("http");
    });
    test("with invalid arguments", () => {
      expect(() => new Url(123).getScheme()).toThrow(
        "http must be type data 'string'!",
      );
      expect(() => new Url("not-a-url").getScheme()).toThrow(
        "Incorrectly URL: not-a-url",
      );
    });
  });
  describe("Testing the method getHostName", () => {
    test("with correctly values", () => {
      expect(url.getHostName()).toBe("yandex.ru");
    });
    test("with invalid arguments", () => {
      expect(() => new Url(123).getHostName()).toThrow(
        "http must be type data 'string'!",
      );
      expect(() => new Url("not-a-url").getHostName()).toThrow(
        "Incorrectly URL: not-a-url",
      );
    });
  });
  describe("Testing the method getQueryParams", () => {
    test("with correctly values", () => {
      expect(url.getQueryParams()).toEqual({ key: "value", key2: "value2" });
    });
    test("with invalid arguments", () => {
      expect(() => new Url(123).getQueryParams()).toThrow(
        "http must be type data 'string'!",
      );
      expect(() => new Url("not-a-url").getQueryParams()).toThrow(
        "Incorrectly URL: not-a-url",
      );
    });
  });
  describe("Testing the method getQueryParam", () => {
    test("with correctly values", () => {
      expect(url.getQueryParam("key")).toBe("value");
      expect(url.getQueryParam("key2", "lala")).toBe("value2");
      expect(url.getQueryParam("new", "ehu")).toBe("ehu");
      expect(url.getQueryParam("new")).toBe(null);
    });
    test("with invalid arguments", () => {
      expect(() => new Url(123).getQueryParam()).toThrow(
        "http must be type data 'string'!",
      );
      expect(() => new Url("not-a-url").getQueryParam()).toThrow(
        "Incorrectly URL: not-a-url",
      );
    });
  });
  describe("Testing the method getQueryParam", () => {
    test("with correctly values", () => {
      expect(
        url.equals(new Url("http://yandex.ru:80?key=value&key2=value2")),
      ).toBeTruthy();
      expect(url.equals(new Url("http://yandex.ru:80?key=value"))).toBeFalsy();
    });
  });
});
