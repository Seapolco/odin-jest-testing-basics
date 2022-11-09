
import caesarCipher from '../functions/caesarCypher'

test('shifts each letter in the string by the specified shiftCount', () => {
    expect(caesarCipher('abcde', 1)).toBe('bcdef');
}) 

test('allows for shiftCounts which exceed the length of the alphabet array', () => {
    expect(caesarCipher('vwxyz', 5)).toBe('abcde');
}) 

test('maintains the case of each letter', () => {
    expect(caesarCipher('VwXyZ', 5)).toBe('AbCdE');
}) 

test('handles characters which are not letters of the alphabet', () => {
    expect(caesarCipher('!w4z#', 5)).toBe('!b4e#');
}) 





