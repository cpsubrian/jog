var util = require('util');

module.exports = {
  output: function(obj) {
    return util.inspect(obj, false, 15, true);
  }
};