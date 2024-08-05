const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
 
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let N = input();
const arr = [];
while (N--) {
    const row = input().split(' ').map(Number);
    arr.push(row);
}

const getCoinCnt = (si, sj) => {
    let cnt = 0;
    for(let i = si; i < si + 3; i++) {
        for(let j = sj; j < sj + 3; j++) {
            if(arr[i][j]) cnt += 1; 
        }
    }
    return cnt;
}

let maxCoinCnt = 0;
for(let si = 0; si < arr.length - 2; si++) {
    for(let sj = 0; sj < arr[0].length - 2; sj++) {
        maxCoinCnt = Math.max(getCoinCnt(si, sj), maxCoinCnt);
    }
}

console.log(maxCoinCnt);