
var Jog = require('../')
  , through = require('through');

describe('StdStore', function(){
  var stream = through(
    function write(data) {
      var self = this;
      process.nextTick(function(){
        self.emit('data', data);
      });
    },
    function end() {
      this.emit('end');
    }
  );

  require('./shared/Store')(new Jog.StdStore({
    in: stream,
    err: stream,
    out: stream
  }));
})