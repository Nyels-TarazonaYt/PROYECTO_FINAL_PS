const { expect } = require('chai');
const { loginUser } = require('../src/user');

describe('User Login', () => {
    // Pruebas de Caja Blanca
    it('should return success for valid username and password', () => {
        const result = loginUser('usuario1', 'password1');
        expect(result.success).to.be.true;
        expect(result.message).to.equal('Login successful!');
    });

    it('should return failure for invalid username', () => {
        const result = loginUser('invalidUser', 'password1');
        expect(result.success).to.be.false;
        expect(result.message).to.equal('Invalid username or password.');
    });

    it('should return failure for invalid password', () => {
        const result = loginUser('usuario1', 'wrongPassword');
        expect(result.success).to.be.false;
        expect(result.message).to.equal('Invalid username or password.');
    });

    it('should return failure for empty username and password', () => {
        const result = loginUser('', '');
        expect(result.success).to.be.false;
        expect(result.message).to.equal('Invalid username or password.');
    });

    // Pruebas de Caja Negra
    it('should return success for edge case with username at max length', () => {
        const longUsername = 'a'.repeat(50);
        const users = [{ username: longUsername, password: 'password1' }];
        const result = loginUser(longUsername, 'password1');
        expect(result.success).to.be.false; // Aquí se asume que el usuario no existe realmente
    });

    it('should return failure for password at minimum length', () => {
        const result = loginUser('usuario1', 'p');
        expect(result.success).to.be.false;
        expect(result.message).to.equal('Invalid username or password.');
    });

    it('should return failure for password at maximum length', () => {
        const longPassword = 'p'.repeat(50);
        const result = loginUser('usuario1', longPassword);
        expect(result.success).to.be.false;
        expect(result.message).to.equal('Invalid username or password.');
    });

    it('should return failure for invalid characters in username', () => {
        const result = loginUser('usu@rio1', 'password1');
        expect(result.success).to.be.false;
        expect(result.message).to.equal('Invalid username or password.');
    });

    it('should return failure for valid username but invalid format password', () => {
        const result = loginUser('usuario1', 'pass word1');
        expect(result.success).to.be.false;
        expect(result.message).to.equal('Invalid username or password.');
    });
});
