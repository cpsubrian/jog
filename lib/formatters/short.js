var util = require('util');

module.exports = {
  output: function(obj) {
    return util.format('\x1B[90m%s\x1B[39m  %s', new Date(obj.timestamp).toLocaleString(), obj.type);
  }
};