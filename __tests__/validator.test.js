// __tests__/validator.test.js
import { PasswordValidator } from "../src/PasswordValidator.js";
/*-----------------------------------------------------*/
describe("Testing the class PasswordValidator", () => {
    test("with default arguments", () => {
        expect(new PasswordValidator().validate('qwertyu22')).toEqual({});
    });
    test("with argument less minLength value", () => {
        expect(new PasswordValidator({ minLength: 20 }).validate('qwertyu22')).toEqual({ minLength: 'too small' });
    });
    test("with the option disabled containNumbers", () => {
        expect(new PasswordValidator({ minLength: 3, containNumbers: false }).validate('yanch')).toEqual({});
    });
    test("with the option enabled containNumbers", () => {
        expect(new PasswordValidator({ minLength: 3, containNumbers: true }).validate('yanch')).toEqual({ containNumbers: 'should contain at least one number' });
    });
    test("with default arguments and invalid password", () => {
        expect(new PasswordValidator().validate('yanch')).toEqual({ minLength: 'too small', containNumbers: 'should contain at least one number' });
    });
    test("with empty value in the validate method", () => {
        expect(() => new PasswordValidator().validate()).toThrow("password must be type data 'string'!");
    });
    test("with incorrectly specified type for options", () => {
        expect(() => new PasswordValidator(3).validate()).toThrow("options must be type data 'object'!");
    });
});