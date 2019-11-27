// Only Array.prototype.push() and Array.prototype.unshift() are allowed.

function mySlice(arr, startIndex, endIndex) {
    let result = '';

    if (endIndex === undefined) {
        for (let i = startIndex; i < arr.length; i++) {
            result += arr[i];
        }
    } else if (endIndex !== undefined) {
        for (let j = startIndex; j < endIndex; j++) {
            result += arr[j];
        }
    } else {
        for (let k = 0; k < arr.length; k++) {
            result += arr[k];
        }
    }

    return result;
}

var data = [
    ['yusuf', '13-05-1990'],
    ['tony', '13-05-1988'],
    ['adiel', '13-11-1997'],
    ['wika', '13-02-1990'],
    ['hardim', '25-03-1994']
];

function ageSort(arr) {
    let result = [];

    for (i = 0; i < arr.length; i++) {
        let year = Number(mySlice(arr[i][1], 6));
        let age = 2019 - year;
        arr[i].push(age);
        result.push(arr[i]);
    }

    for (let j = 0; j < result.length; j++) {
        for (let k = j+1; k < result.length; k++) {
            if (result[j][2] > result[k][2]) {
                let swap = result[k][2];
                result[k][2] = result[j][2];
                result[j][2] = swap;
            }
        }
    }

    return result;
}

console.log(ageSort(data));


// let myYear = ['13-05-1990'];
// console.log(mySlice(myYear[0], 6));