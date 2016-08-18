/** @module certainty */
var format = require('certainty/lib/format');
var Subject = require('certainty/lib/subject/subject');
// var ProxyBase = require('certainty/lib/subject/proxy');
// var EachSubject = require('certainty/lib/subject/eachSubject');

/** Subclass of Subject which provides assertions methods for React enzyme wrappers.
    @param {FailureStrategy} failureStrategy The failure strategy to use when an assertion fails.
    @param {object} value The value being checked.
    @constructor
    @extends Subject
*/
function ReactWrapperSubject(failureStrategy, value) {
  Subject.call(this, failureStrategy, value);
}
ReactWrapperSubject.prototype = Object.create(Subject.prototype);
ReactWrapperSubject.prototype.constructor = ReactWrapperSubject;

/** Ensure that the subject value has the given css class.
    @return {ReactWrapperSubject} `this` for chaining.
*/
ReactWrapperSubject.prototype.hasClass = function (clsName) {
  if (!this.value.hasClass(clsName)) {
    this.failureStrategy.fail('Expected ' + this.describe() + ' to have class \'' +
      clsName + '\'.');
  }
  return this;
};

module.exports = ReactWrapperSubject;
