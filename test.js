function rankIndex(values, rank) {
    if (!values || !rank)
        throw new Error('Invalid data');
    if (values.length < 1 || values.length > 10)
        throw new Error('number of students cannot be bigger than 10 or smaller than 1')
    if (values[0].length < 1 || values[0].length > 10)
        throw new Error('number of marks cannot be bigger than 10 or smaller than 1')
    if (rank < 1 || rank > values.length)
        throw new Error('rank cannot be bigger than number of students or smaller than 1')
    let sumArr = [];
    values.forEach((studentMarks, key) => {
        let sum = 0;
        //console.log(studentMarks);
        studentMarks.forEach((mark) => {
            //console.log(sum, mark);
            if (mark < 0 || mark > 100)
                throw new Error('mark cannot be bigger than 100 or smaller than 0')
            return sum += mark
        });
        sumArr.push({studentIdx: key, sum})
    });
    sumArr.sort((a, b) => {
        if (b.sum - a.sum !== 0) return b.sum - a.sum;
        return -1
    });
    console.log(sumArr);
    return sumArr[rank - 1].studentIdx;
}

const arr = [[78, 81, 82, 69], [78, 81, 82, 69], [74, 92, 75, 73], [73, 88, 99, 80]];

//console.log(rankIndex(arr, 2));

function strangeSort(mapping, nums) {
    let decodedArr = [];
    nums.forEach((encodedNumber, key) => {
        let decodedNumber;
        decodedNumber = encodedNumber.split('').map((digit) => {
            let digitAsInt = parseInt(digit);
            return mapping.findIndex((value) => value === digitAsInt);
        });
        let resToSort = 0;
        decodedNumber.map(((x, key) => {
            let value = parseInt(x, 10)*Math.pow(10,(decodedNumber.length-key-1));
            resToSort += value;
        }));
        decodedArr.push({resToSort, encodedNumber});
    });
    return decodedArr.sort((a, b) => a.resToSort-b.resToSort).map(el => el.encodedNumber);
}

const mapping = [3, 5, 4, 6, 2, 7, 9, 8, 0, 1];
const arr2 = ['990', '332', '32'];
console.log(strangeSort(mapping, arr2));