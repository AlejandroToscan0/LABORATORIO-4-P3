const { factorial, fibonacci } = require('./math');

test('Factorial of 5 is 120', () => {
    expect(factorial(5)).toBe(120);
});

test('Fibonacci de 6 es 840', () => {
    expect(fibonacci(6)).toBe(8);
});