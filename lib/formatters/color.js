var util = require('util');

module.exports = {
  output: function(lines) {
    lines.forEach(function(line) {
      console.log(util.inspect(line, false, 15, true));
    });
  }
};