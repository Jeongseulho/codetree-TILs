const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
 
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let [n, m] = input().split(' ').map(Number);
const arr = [];
while (n--) {
    const row = input().split(' ').map(Number);
    arr.push(row);
}

let ans = 0;

for(let i = 0; i < arr.length; i++) {
    let cnt = 1;
    let prev = arr[i][0];
    for(let j = 1; j < arr[0].length; j++) {
        if(prev === arr[i][j]) {
            cnt += 1;
        } else {
            cnt = 1;
            prev = arr[i][j];
        }
        if(cnt === m) {
            ans += 1;
            continue;
        }
    }
}

for(let j = 0; j < arr[0].length; j++) {
    let cnt = 1;
    let prev = arr[0][j];
    for(let i = 1; i < arr.length; i++) {
        if(prev === arr[i][j]) {
            cnt += 1;
        } else {
            cnt = 1;
            prev = arr[i][j];
        }
        if(cnt === m) {
            ans += 1;
            continue;
        }
    }
}

console.log(ans);