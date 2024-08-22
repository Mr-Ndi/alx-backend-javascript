const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('Rounding the first argument', () => {
        assert.equal(calculateNumber(1.00, 1), 2);
        assert.equal(calculateNumber(1.02, 3), 4);
        assert.equal(calculateNumber(1.03, 3), 4);
        assert.equal(calculateNumber(1.3, 3), 4);
        assert.equal(calculateNumber(1.41, 2), 3);
    });

    it('Rounding the second argument', () => {
        assert.equal(calculateNumber(1, 1.2), 2);
        assert.equal(calculateNumber(1, 3.1), 4);
        assert.equal(calculateNumber(2, 3.4), 5);
        assert.equal(calculateNumber(4, 3.1), 7);
        assert.equal(calculateNumber(8, 2.9), 11);
    });
    it('Returning the right answwer', () => {
        assert.equal(calculateNumber(1.3, 0), 1);
        assert.equal(calculateNumber(0, 1.2), 1);
        assert.equal(calculateNumber(1.3, 1.3), 2);
        assert.equal(calculateNumber(1.7, 1.2), 3);
        assert.equal(calculateNumber(1.3, 1.8), 3);
        assert.equal(calculateNumber(1.6, 1.8), 4);
    });
});