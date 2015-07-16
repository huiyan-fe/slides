var fs = require('fs');

function* flow(){
    var file1 = yield fs.readFile('1.text');
    cosnole.log(file1)
    var file2 = yield fs.readFile('2.text');
    console.log(file2)
}

