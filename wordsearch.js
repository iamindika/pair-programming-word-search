//Searchs rows for word match
const rowSearch = (letterGrid, word) => {
  const wordGrid = letterGrid.map(letterRow => letterRow.join(''));

  for (const wordRow of wordGrid) {

    if (wordRow.includes(word)) {
      return true;
    } else if (wordRow.split('').reverse().join('').includes(word)){
      return true;
    }

  }

  return false;
}

//Transposes matrix (rows to columns and vice versa) and preps for rowSearch
//Helps check for vertical matches
const transpose = (letterGrid) => {
  const numColumns = letterGrid[0].length;
  const numRows = letterGrid.length;
  const transposedLetterGrid = [];
  
  for (let column = 0; column < numColumns; column++) {
    let letterRow = [];

    for (let row = 0; row < numRows; row++) {
      letterRow.push(letterGrid[row][column]);
    }

    transposedLetterGrid.push(letterRow);
  }

  return transposedLetterGrid;
}

//Extracts diagonals and returns new grid to prep for rowSearch
const diagonals = (letterGrid) => {
  const diagonalLetterGrid = [];
  const l = letterGrid.length;
  const diagonalOne = [];
  const diagonalTwo = [];


  for (let i = 0; i < l; i++) {
    diagonalOne.push(letterGrid[i][i]);
    diagonalTwo.push(letterGrid[l - 1 - i][i])
  }

  diagonalLetterGrid.push(diagonalOne);
  diagonalLetterGrid.push(diagonalTwo);

  return diagonalLetterGrid;
}

//Program runner
//See test cases in "./test/test_wordsearch.js"
const wordSearch = (letterGrid, word) => { 
  if (letterGrid.length && letterGrid[0].length) {
    if (rowSearch(letterGrid, word)) {
      return true;
    }

    if (rowSearch(transpose(letterGrid), word)) {
      return true;
    }

    if (letterGrid.length === letterGrid[0].length) {
      if (rowSearch(diagonals(letterGrid), word)) {
        return true;
      }
    }
  }

return false;
}

module.exports = wordSearch;