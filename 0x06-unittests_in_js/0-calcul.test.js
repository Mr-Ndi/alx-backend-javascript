const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('rounding first argument', () => {
        assert.equal(calculateNumber(1, 3), 4);
        assert.equal(calculateNumber(1.7, 3), 5);
        assert.equal(calculateNumber(1.2, 3), 4);
        assert.equal(calculateNumber(1.8, 3), 6);
    });

    it('Rounding second argument', () => {
        assert.equal(calculateNumber(6, 1.2), 7);
        assert.equal(calculateNumber(2, 3.1), 5);
        assert.equal(calculateNumber(6, 1.3), 7);
        assert.equal(calculateNumber(3, 1.7), 5);
        assert.equal(calculateNumber(1, 5.9), 7);
    });

    it('Returning the right answer', () => {
        assert.equal(calculateNumber(1.4, 0.5), 2);
        assert.equal(calculateNumber(3, 3.4), 6);
        assert.equal(calculateNumber(45, 5), 80);
        assert.equal(calculateNumber(20, 7.3), 27);
        assert.equal(calculateNumber(0.4, 4.3), 5);
        assert.equal(calculateNumber(0.9, 6.6), 8);
    });
});