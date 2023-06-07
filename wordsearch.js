 //colaborated with Asha Shiddo
 
 const transpose = function (matrix) {
        let newArray = [];
        //Rows
        for (let i = 0; i < matrix[0].length; i++) {
          newArray.push([]);
        }
        //Columns
        for (let column = 0; column < matrix.length; column++) {
          for (let row = 0; row < matrix[column].length; row++) {
            newArray[row].push(matrix[column][row]);
          }
        }
        return newArray;
      };

const wordSearch = (letters, word) => { 
    //Row
    const horizontalJoin = letters.map(ls => ls.join(''))
    //Column
    const verticalJoin = transpose(letters).map(ls=>ls.join(''));

    // const verticalJoin = transpose(letters).map(ls => ls.join('')) //added 
    for (letter of horizontalJoin) {
        if (letter.includes(word)) return true;
    }
    for (letter of verticalJoin) {
        if (letter.includes(word)) return true; // added 
    }
    return false;
}

module.exports = wordSearch

const array = [
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
];

   //Row
   let ROW = array.map(ls => ls.join(''))
   //Column
   let COLUMN = transpose(array).map(ls=>ls.join(''));

console.log(`ROW:   ${ROW}`)
console.log(`COLUMN: ${COLUMN}`);

// let ROW = array;

// let COLUMN = transpose(array);
// console.log(COLUMN);
// let stringReverse = s.split("").reverse().join("");

// //Row
// let final = array.map(ls=>ls.join(''));

// Column
// console.log(transpose(array).map(ls=>ls.join('')));

// console.log(final);

