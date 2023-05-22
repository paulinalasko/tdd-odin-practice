const caesarCipher = require('./caesarCipher')

test('ciphers apple to equal bqqmf', () => {
    expect(caesarCipher('apple')).toBe('bqqmf');
})