const fs = require('fs');

// 동기적 처리
console.log("1) file read start");
let data = fs.readFileSync('sync.txt', {encoding:'utf8'});
console.log("2) file read end");
console.log("3) " + data);

// 비동기적 처리 
console.log("1) file read start");
fs.readFile('sync.txt', {encoding:'utf8'}, (err, data) => {
    if (err) throw err;
    console.log("2) " + data);
  });
console.log("3) file read end");