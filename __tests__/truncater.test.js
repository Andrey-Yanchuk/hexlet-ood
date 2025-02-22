// __tests__/truncater.test.js
import { Truncater } from "../src/Truncater.js";
/*-----------------------------------------------------*/
describe("Testing the class Truncater", () => {
    test("with default options", () => {
        expect(new Truncater().truncate('one two three')).toBe('one two...');
    });
    test("with the changed option length", () => {
        expect(new Truncater({ length: 3 }).truncate('one two three')).toBe('one...');
        expect(new Truncater().truncate('one two three', { length: 3 })).toBe('one...');
    });
    test("with the changed option separator", () => {
        expect(new Truncater({ separator: "***" }).truncate('one two three')).toBe('one two***');
        expect(new Truncater().truncate('one two three', { separator: "***" })).toBe('one two***');
    });
    test("with the changed options separator and length", () => {
        expect(new Truncater({ separator: "***", length: 3 }).truncate('one two three')).toBe('one***');
        expect(new Truncater().truncate('one two three', { separator: "***", length: 3 })).toBe('one***');
    });
    test("with option length which is not equal to number", () => {
        expect(() => new Truncater({ separator: "***", length: NaN }).truncate('one two three')).toThrow("length must be a valid number!");
        expect(() => new Truncater().truncate('one two three', { separator: "***", length: NaN })).toThrow("length must be a valid number!");
    });
    test("with a string whose value is less than the option length", () => {
        expect(new Truncater({ length: 6 }).truncate("one")).toBe('one');
        expect(new Truncater().truncate("one", { length: 6 })).toBe('one');
    });
    test("with invalid values", () => {
        expect(() => new Truncater("***", 9).truncate('one two three')).toThrow("options must be type data 'object'!");
        expect(() => new Truncater().truncate('one two three', "***")).toThrow("options must be type data 'object'!");
        expect(() => new Truncater().truncate(33, "***")).toThrow("string must be type data 'string'!");
        expect(() => new Truncater().truncate('one two three', null)).toThrow("options must be type data 'object'!");
    });
});