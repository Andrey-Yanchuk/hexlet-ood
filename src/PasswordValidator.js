// src/PasswordValidator.js
/*-----------------------------------------------------*/
export class PasswordValidator {
    constructor(options = {}) {
        if (typeof options !== 'object' || options === null) throw new Error("options must be type data 'object'!");
        this.options = { minLength: 8, containNumbers: true, ...options };
    }
    validate(password) {
        if (typeof password !== 'string') throw new Error("password must be type data 'string'!");
        const errors = {};
        if (password.length < this.options.minLength) errors.minLength = 'too small';
        if (this.options.containNumbers && !password.split('').some(char => '0123456789'.includes(char))) errors.containNumbers = 'should contain at least one number';
        return errors;
    }
}
// const validator = new PasswordValidator({ containNumbers: false });
// console.log(validator.validate('qwertyui')); // {}
// console.log(validator.validate('qwerty')); // { minLength: 'too small' }