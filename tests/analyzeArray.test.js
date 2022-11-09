
import analyzeArray from "../functions/analyzeArray";

test('provides an object with the correct values', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({ average: 4, min: 1, max: 8, length: 6 })
})

