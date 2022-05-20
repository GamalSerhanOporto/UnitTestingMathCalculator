const AccumulativeOperations = require("../../Accumulative.mjs")
const acc = new AccumulativeOperations();

test('is summation of 3 from 1 to 7', () => {
    expect(acc.summation(1,5,5).toBe(9))
});
