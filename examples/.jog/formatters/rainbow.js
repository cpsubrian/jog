require('colors');

module.exports = {
  map: function(obj) {
    return obj.type;
  },
  select: function(obj) {
    return obj.level === 'info';
  },
  output: function(obj) {
    return obj.rainbow;
  }
};