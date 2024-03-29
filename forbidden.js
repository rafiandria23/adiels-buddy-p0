/*
  Buatlah sebuah function untuk menghitung berapa kali huruf pada kumpulan huruf tersebut muncul
  huruf yang di hitung kemunculannya adalah huruf selain kata haram di parameter kedua tersebut
  untuk contoh perhatikan testcase
*/


function main (alphabets, forbidden) {
  //your code here
  let result = [];
  let alphabetsStack = [];

  for (let i = 0; i < alphabets.length; i++) {
    let check = 0;

    for (let j = 0; j < alphabetsStack.length; j++) {
      if (alphabets[i] === alphabetsStack[j]) {
      check++;
      }
    }

    for (let z = 0; z < forbidden.length; z++) {
      if (alphabets[i] === forbidden[z]) {
        check++;
      }
    }

    if (check === 0) {
      alphabetsStack.push(alphabets[i]);
    }
  }

  for (let k = 0; k < alphabetsStack.length; k++) {
    let eachResult = [];

    for (let l = 0; l < alphabets.length; l++) {
      if (alphabets[l] === alphabetsStack[k]) {
        eachResult.push(alphabets[l]);
      }
    }

    result.push([eachResult[0], eachResult.length]);
  }

  return result;
}

// Additional way from Adiel

// function main (alphabets, forbidden) {
//   var alphabetsStack = []
//   for (let i = 0; i < alphabets.length; i++) {
//     let check = -1;
//     for (let j = 0; j < alphabetsStack.length; j++) {
//       if (alphabets[i] === alphabetsStack[j][0]) {
//         check = j;
//       }
//     }
//     if (check == -1) {
//       alphabetsStack.push([alphabets[i], 1])
//     } else {
//       alphabetsStack[check][1]++
//     }
//   }
//   return alphabetsStack
// }

console.log(main("asdkjwlkhduefakueawdggbmopp", "gw"))
// [ [ 'a', 3 ],
//   [ 's', 1 ],
//   [ 'd', 3 ],
//   [ 'k', 3 ],
//   [ 'j', 1 ],
//   [ 'l', 1 ],
//   [ 'h', 1 ],
//   [ 'u', 2 ],
//   [ 'e', 2 ],
//   [ 'f', 1 ],
//   [ 'b', 1 ],
//   [ 'm', 1 ],
//   [ 'o', 1 ],
//   [ 'p', 2 ] ]

console.log(main("jawidianknjnwadknovnaxzwidj", "diw"))
// [ [ 'j', 3 ],
//   [ 'a', 4 ],
//   [ 'n', 5 ],
//   [ 'k', 2 ],
//   [ 'o', 1 ],
//   [ 'v', 1 ],
//   [ 'x', 1 ],
//   [ 'z', 1 ] ]