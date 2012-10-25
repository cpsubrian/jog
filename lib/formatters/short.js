var util = require('util');

module.exports = {
  output: function(lines) {
    lines.forEach(function(line) {
      console.log(util.format('\x1B[90m%s\x1B[39m  %s', new Date(line.timestamp).toLocaleString(), line.type));
    });
  }
};