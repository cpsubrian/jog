require('colors');

module.exports = {
  map: function(obj) {
    return obj.type;
  },
  select: function(obj) {
    return obj.level === 'info';
  },
  output: function(lines) {
    lines.forEach(function(line) {
      console.log(line.rainbow);
    });
  }
};