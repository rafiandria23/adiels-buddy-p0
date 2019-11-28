/* 
  Buatlah sebuah function yang mencari diagonal kiri dan diagonal kanan pada board tersebut
  contoh : [
    [a, b, c],
    [d, e, f],
    [g, h, i]
  ]
  -> diagonal kanan nya adalah "a", "e", "i"
  -> diagonal kiri nya adalah "c", "e", "g"
  maka output dari function ini adalah array multidimensi,
  yang menampung diagonal kiri dan kanan nya
  output: [[ 'a', 'e', 'i' ], [ 'c', 'e', 'g' ] ]
*/
function main (board) {
  // your code here

  let result = [];
  let tempLeft = [];
  let tempRight = [];
  
  for (let i = 0; i < board.length; i++) {
    tempLeft.push(board[i][board[i].length-1-i]);
  }

  for (let j = 0; j < board.length; j++) {
    tempRight.push(board[j][j]);
  }

  result.push(tempLeft);
  result.push(tempRight);

  return result;
}

var board1 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
]
console.log(main(board1))
// [ [ 'c', 'e', 'g' ], [ 'a', 'e', 'i' ] ]

var board2 = [
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"],
]
console.log(main(board2))
// [ [ 'd', 'g', 'j', 'm' ], [ 'a', 'f', 'k', 'p' ] ]


var board3 = [
  ["a", "b"],
  ["c", "d"]
]
console.log(main(board3))
// [ [ 'b', 'c' ], [ 'a', 'd' ] ]