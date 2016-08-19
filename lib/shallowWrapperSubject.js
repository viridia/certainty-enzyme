/** @module certainty */
var format = require('certainty/lib/format');
var WrapperSubject = require('./wrapperSubject');

/** Subclass of Subject which provides assertions methods for React enzyme shallow wrappers.
    @param {FailureStrategy} failureStrategy The failure strategy to use when an assertion fails.
    @param {object} value The value being checked.
    @constructor
    @extends WrapperSubject
*/
function ShallowWrapperSubject(failureStrategy, value) {
  WrapperSubject.call(this, failureStrategy, value);
}
ShallowWrapperSubject.prototype = Object.create(WrapperSubject.prototype);
ShallowWrapperSubject.prototype.constructor = ShallowWrapperSubject;

module.exports = ShallowWrapperSubject;
