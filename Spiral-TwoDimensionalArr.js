
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

const spiral = matrix => {
    const newArray = [];

    let rowCount = matrix.length;
    let columnCount = matrix[0].length;
    let startRow = 0;
    let endRow = rowCount - 1;

    let startColumn = 0;
    let endColumn = columnCount - 1;

    while (endRow >= startRow && endColumn >= startColumn) {


        for (let column = endColumn; column >= startColumn; column--) {
            newArray.push(matrix[startRow][column]);
        }
        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            newArray.push(matrix[row][startColumn]);

        }
        startColumn++;

        if (endRow >= startRow) {
            for (let column = startColumn; column <= endColumn; column++) {
                newArray.push(matrix[endRow][column]);

            }
        }
        endRow--;

        if (endColumn >= startColumn) {
            for (let row = endRow; row >= startRow; row--) {
                newArray.push(matrix[row][endColumn]);
            }
        }
        endColumn--;
    }
    return newArray;
}

console.log(spiral(matrix));