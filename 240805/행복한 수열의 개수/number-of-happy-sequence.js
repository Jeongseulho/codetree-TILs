const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
let seq = Array(n).fill(0);

function isHappySequence() {
    let consecutiveCount = 1, maxCcnt = 1;
    for (let i = 1; i < n; i++) {
        if (seq[i - 1] === seq[i]) {
            consecutiveCount += 1;
        } else {
            consecutiveCount = 1;
        }
        
        maxCcnt = Math.max(maxCcnt, consecutiveCount);
    }
    
    return maxCcnt >= m;
}


let numHappy = 0;

for (let i = 0; i < n; i++) {
    seq = grid[i].slice();

    if (isHappySequence()) {
        numHappy += 1;
    }
}

for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
        seq[i] = grid[i][j];
    }

    if (isHappySequence()) {
        numHappy += 1;
    }
}

console.log(numHappy);