import capitalize from '../functions/capitalize';


test('capitalizes the first letter of the string', () => {
    expect(capitalize('perambulate')).toBe('Perambulate')
})

test('removes leading and trailing whitespace AND capitalizes first letter', () => {
    expect(capitalize('       epexegetically         ')).toBe('Epexegetically')
})
