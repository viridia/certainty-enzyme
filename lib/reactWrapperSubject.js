/** @module certainty */
var WrapperSubject = require('./wrapperSubject');

/** Subclass of Subject which provides assertions methods for React enzyme deep wrappers.
    @param {FailureStrategy} failureStrategy The failure strategy to use when an assertion fails.
    @param {object} value The value being checked.
    @constructor
    @extends WrapperSubject
*/
function ReactWrapperSubject(failureStrategy, value) {
  WrapperSubject.call(this, failureStrategy, value);
}
ReactWrapperSubject.prototype = Object.create(WrapperSubject.prototype);
ReactWrapperSubject.prototype.constructor = ReactWrapperSubject;

module.exports = ReactWrapperSubject;
