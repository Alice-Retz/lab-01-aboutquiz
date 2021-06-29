// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { isYes } from '../utils.js';


const test = QUnit.test;

test('should return true for yes-y strings', expect => {
    const yesString = isYes('yes');
    const yString = isYes('y');
    expect.equal(yesString, true);
    expect.equal(yString, true);
});

test('should return false for non yes-y strings', expect => {
    const noString = isYes('no');
    expect.equal(noString, false);
});
