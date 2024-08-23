const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    it('should return 6 for SUM of 1.4 and 4.5', function() {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return -4 for SUBTRACT of 1.4 and 4.5', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0.2 for DIVIDE of 1.4 and 4.5', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" for DIVIDE of 1.4 and 0', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    // Edge cases
    it('should handle rounding of negative numbers', function() {
        assert.strictEqual(calculateNumber('SUM', -1.4, -2.6), -4);
    });

    it('should handle subtracting larger rounded number from smaller one', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.1, 3.8), -3);
    });

    it('should handle divide by a number that rounds to 1', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 4.4, 0.9), 4);
    });
});
