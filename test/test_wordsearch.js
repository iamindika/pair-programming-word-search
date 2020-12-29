const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if grid is empty", function() {
    const result = wordSearch([], 'FRANK')

    assert.isFalse(result);
  });

  it("should return false if grid has empty rows", function() {
    const result = wordSearch([[]], 'FRANK')

    assert.isFalse(result);
  });

  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if backward horizontal match is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'Y', 'R', 'R', 'E', 'J', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'JERRY')

    assert.isTrue(result);
  });

  it("should return true if forward horizontal match is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if backward vertical match is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'O', 'Y', 'E', 'R', 'L'],
      ['B', 'Y', 'R', 'M', 'E', 'J', 'Y', 'B'],
      ['U', 'B', 'T', 'S', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'O', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'C', 'Q', 'U', 'A', 'L'],
    ], 'COSMO')

    assert.isTrue(result);
  });

  it("should return true if forward vertical match is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'K', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'R', 'R', 'G'],
      ['W', 'H', 'C', 'O', 'Y', 'A', 'R', 'L'],
      ['B', 'Y', 'R', 'M', 'E', 'M', 'Y', 'B'],
      ['U', 'B', 'T', 'S', 'A', 'E', 'A', 'I'],
      ['O', 'D', 'C', 'O', 'K', 'R', 'A', 'S'],
      ['E', 'Z', 'K', 'C', 'Q', 'U', 'A', 'L'],
    ], 'KRAMER')

    assert.isTrue(result);
  });

  it("should return true if backward diagonal match is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'E'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'A', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'I', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'N', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'E', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ], 'ELAINE')

    assert.isTrue(result);
  });

  it("should return true if forward diagonal match is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'E'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'B', 'F', 'Q', 'A', 'A', 'L'],
      ['H', 'M', 'J', 'E', 'I', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'N', 'N', 'E', 'R', 'L'],
      ['B', 'F', 'E', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'S', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ], 'BENES')

    assert.isTrue(result);
  });
});
