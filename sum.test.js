function suma(a, b) {
    return a + b;
}

test('1 + 1 = 2', () => {
    expect(suma(1, 1)).toBe(2);
});

test('1 + 2 = 3', () => {
    expect(suma(1, 2)).toBe(3);
});

module.exports = { suma };