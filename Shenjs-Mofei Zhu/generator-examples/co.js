var fs = require('fs');
var halper = function (fn) {
    return function () {
        var args = [].slice.call(arguments);
        var pass;
        args.push(function () {
            if(pass) {
                pass.apply(null, arguments);
            }
        });
        var b = fn.apply(null, args);
        return function (fn) {
            pass = fn;
        }
    }
};
//
var readFile = halper(fs.readFile);
// var flow = function* () {
//     var txt = yield readFile('1.text');
// }
//
// var gen = flow();
// var ret = gen.next();
// ret.value(function (err, data) {
//     gen.next(data);
// });
var co = function (flow) {
  var generator = flow();
  var next = function (data) {
    var result = generator.next(data);
    if (!result.done) {
      result.value(function (err, data) {
        if (err) {
          throw err;
        }
        next(data);
      });
    }
  };
  next();
};

co(function* (){
    var txt = yield readFile('1.text');
    console.log(txt.toString());
    var txt2 = yield readFile('2.text');
    console.log(txt2.toString());
})
