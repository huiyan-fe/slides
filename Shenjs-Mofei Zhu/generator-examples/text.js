System.registerModule("co.js", [], function() {
  "use strict";
  var __moduleName = "co.js";
  var fs = require('fs');
  var halper = function(fn) {
    return function() {
      var args = [].slice.call(arguments);
      var pass;
      args.push(function() {
        if (pass) {
          pass.apply(null, arguments);
        }
      });
      var b = fn.apply(null, args);
      return function(fn) {
        pass = fn;
      };
    };
  };
  var readFile = halper(fs.readFile);
  var co = function(flow) {
    var generator = flow();
    var next = function(data) {
      var result = generator.next(data);
      if (!result.done) {
        result.value(function(err, data) {
          if (err) {
            throw err;
          }
          next(data);
        });
      }
    };
    next();
  };
  co($traceurRuntime.initGeneratorFunction(function $__0() {
    var txt,
        txt2;
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            $ctx.state = 2;
            return readFile('1.text');
          case 2:
            txt = $ctx.sent;
            $ctx.state = 4;
            break;
          case 4:
            console.log(txt.toString());
            $ctx.state = 10;
            break;
          case 10:
            $ctx.state = 6;
            return readFile('2.text');
          case 6:
            txt2 = $ctx.sent;
            $ctx.state = 8;
            break;
          case 8:
            console.log(txt2.toString());
            $ctx.state = -2;
            break;
          default:
            return $ctx.end();
        }
    }, $__0, this);
  }));
  return {};
});
System.get("co.js" + '');
