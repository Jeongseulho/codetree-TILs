const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let [n, m] = input().split(' ').map(Number);
const arr = [];
for (let i = 0; i < n; i++) {
    const row = input().split(' ').map(Number);
    arr.push(row);
}

const shapes = [
    [[1, 1, 0],
    [1, 0, 0],
    [0, 0, 0]],

    [[1, 1, 0],
    [0, 1, 0],
    [0, 0, 0]],

    [[1, 0, 0],
    [1, 1, 0],
    [0, 0, 0]],

    [[0, 1, 0],
    [1, 1, 0],
    [0, 0, 0]],

    [[1, 1, 1],
    [0, 0, 0],
    [0, 0, 0]],

    [[1, 0, 0],
    [1, 0, 0],
    [1, 0, 0]],
];

const getBlockSum = (block, ci, cj) => {
    let sum = 0;
    for (let i = 0; i < block.length; i++) {
        for (let j = 0; j < block[i].length; j++) {
            if (block[i][j] === 1) {
                const x = ci + i;
                const y = cj + j;
                if (x < n && y < m) sum += arr[x][y];
                else return 0;
            }
        }
    }
    return sum;
};

let ans = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        for (const shape of shapes) {
            ans = Math.max(ans, getBlockSum(shape, i, j));
        }
    }
}

console.log(ans);