
/**
 * Module depedencies.
 */

var debug = require('debug')('jog:std')
  , EventEmitter = require('events').EventEmitter;

/**
 * Expose `StdStore`.
 */

module.exports = StdStore;

/**
 * Initialize a `StdStore`.
 *
 * @api public
 */

function StdStore() {
  debug('stdstore');
}

/**
 * Add `obj` to the file.
 *
 * @param {Object} obj
 * @api private
 */

StdStore.prototype.add = function(obj){
  debug('add %j', obj);
  process.stdout.write(JSON.stringify(obj) + '\n');
};

/**
 * Clear and invoke `fn()`.
 *
 * @param {Function} fn
 * @api private
 */

StdStore.prototype.clear = function(fn){
  debug('clear');
  process.nextTick(fn);
};

/**
 * Return an `EventEmitter` which emits "data"
 * and "end" events.
 *
 * @param {Object} options
 * @return {EventEmitter}
 * @api private
 */

StdStore.prototype.stream = function(options){
  var emitter = options.emitter || new EventEmitter
    , options = options || {}
    , buf = options.buf || ''
    , self = this
    , substr
    , obj
    , i;

  // stream
  var stream = process.stdin;
  stream.resume();
  stream.setEncoding('utf8');

  stream.on('data', function(chunk){
    buf += chunk
    while (~(i = buf.indexOf('\n'))) {
      substr = buf.slice(0, i);
      if ('' == substr) break;
      // We need to be more lenient with stdin than other stores.
      try {
        obj = JSON.parse(substr);
      }
      catch(e) {
        obj = {type: substr};
      }
      emitter.emit('data', obj);
      buf = buf.slice(i + 1);
    }
  });

  stream.on('end', function(){
    emitter.emit('end');
  });

  return emitter;
};