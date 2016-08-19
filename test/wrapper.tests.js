/* eslint-env node, mocha */
var ensure = require('certainty').ensure;
require('../index');

function assertThrows(f, msg) {
  try {
    f();
  } catch (e) {
    ensure(e + '').named('message').equals('Error: ' + msg);
    return;
  }
  throw new Error('expected assertion failure with message: \'' + msg + '\'');
}

describe('ensure.ReactWrapper', function () {
});
