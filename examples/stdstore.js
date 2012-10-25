/**
 * Example usage of StdStore.
 *
 * Run this example like: `node examples/stdstore.js` to see JSON output.
 *
 * After that play with piping the output to the `jog` CLI.
 *
 * Try:
 *
 * `node examples/stdstore.js 2>&1 | jog -f --map type`
 * `node examples/stdstore.js 2>&1 | jog -f --level info`
 * `node examples/stdstore.js 2>&1 | jog -f -c --level error`
 *
 * Note: You need to redirect stderr to stdout (2>&1) unless you set the
 * `redirect` option to true when you create the StdStore().
 */

var Jog = require('..')
  , log = new Jog(new Jog.StdStore());
  //, log = new Jog(new Jog.StdStore({redirect: true}));

log.info('module', {name: 'express', author: 'tjholowaychuk'});
log.warn('module', {name: 'request', author: 'mikeal'});
log.info('site', {url: 'http://npmjs.org'});
log.info('module', {name: 'mkdirp', author: 'substack'});
log.error('site', {url: 'http://expressjs.com'});