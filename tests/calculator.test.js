import calculator from '../functions/calculator';


test('adds two numbers', () => {
    expect(calculator().add(100, 50)).toBe(150)
})

test('subtracts b from a', () => {
    expect(calculator().subtract(100, 50)).toBe(50);
})

test('multiplies a by b', () => {
    expect(calculator().multiply(100,50)).toBe(5000)
})

test('divides a by b', () => {
    expect(calculator().divide(100, 50)).toBe(2)
})

