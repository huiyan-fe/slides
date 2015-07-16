var fs = require('fs');

function flow(){
    fs.readFile('1.text',function(err,res1){
        fs.readFile('2.text',function(err,res2){
            console.log(res2.toString());
            console.log(res1.toString());

        })
    })
}

flow()
