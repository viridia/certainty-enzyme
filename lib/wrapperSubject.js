/** @module certainty */
var format = require('certainty/lib/format');
var Subject = require('certainty/lib/subject/subject');

/** Subclass of Subject which provides assertions methods for React enzyme wrappers.
    @param {FailureStrategy} failureStrategy The failure strategy to use when an assertion fails.
    @param {object} value The value being checked.
    @constructor
    @extends Subject
*/
function WrapperSubject(failureStrategy, value) {
  Subject.call(this, failureStrategy, value);
}
WrapperSubject.prototype = Object.create(Subject.prototype);
WrapperSubject.prototype.constructor = WrapperSubject;

/** Ensure that the subject element matches the given selector.
    @return {WrapperSubject} `this` for chaining.
*/
WrapperSubject.prototype.is = function (selector) {
  if (!this.value.is(selector)) {
    this.failureStrategy.fail('Expected ' + this.describe() + ' to match selector \'' +
      selector + '\'.');
  }
  return this;
};

/** Ensure that the subject element does not match the given selector.
    @return {WrapperSubject} `this` for chaining.
*/
WrapperSubject.prototype.isNot = function (selector) {
  if (this.value.is(selector)) {
    this.failureStrategy.fail('Expected ' + this.describe() + ' to not match selector \'' +
      selector + '\'.');
  }
  return this;
};

/** Ensure that the subject element has the given css class.
    @return {WrapperSubject} `this` for chaining.
*/
WrapperSubject.prototype.hasClass = function (clsName) {
  if (!this.value.hasClass(clsName)) {
    this.failureStrategy.fail('Expected ' + this.describe() + ' to have class \'' +
      clsName + '\'.');
  }
  return this;
};

/** Ensure that the subject element does not have the given css class.
    @return {WrapperSubject} `this` for chaining.
*/
WrapperSubject.prototype.doesNotHaveClass = function (clsName) {
  if (this.value.hasClass(clsName)) {
    this.failureStrategy.fail('Expected ' + this.describe() + ' to not have class \'' +
      clsName + '\'.');
  }
  return this;
};

/** Ensure that the subject element contains the given node or nodes.
    @return {WrapperSubject} `this` for chaining.
*/
WrapperSubject.prototype.contains = function (nodeOrNodes) {
  if (!this.value.contains(nodeOrNodes)) {
    this.failureStrategy.fail('Expected ' + this.describe() + ' to contain ' +
      format(nodeOrNodes) + '.');
  }
  return this;
};

/** Ensure that the subject element does not contain the given node or nodes.
    @return {WrapperSubject} `this` for chaining.
*/
WrapperSubject.prototype.doesNotContain = function (nodeOrNodes) {
  if (this.value.contains(nodeOrNodes)) {
    this.failureStrategy.fail('Expected ' + this.describe() + ' to not contain ' +
      format(nodeOrNodes) + '.');
  }
  return this;
};

/** Ensure that the subject element contains a node matching the argument.
    @return {WrapperSubject} `this` for chaining.
*/
WrapperSubject.prototype.containsMatchingElement = function (node) {
  if (!this.value.containsMatchingElement(node)) {
    this.failureStrategy.fail('Expected ' + this.describe() + ' to contain element matching ' +
      format(node) + '.');
  }
  return this;
};

/** Ensure that the subject element contains nodes matching all of the argument nodes.
    @return {WrapperSubject} `this` for chaining.
*/
WrapperSubject.prototype.containsAllMatchingElements = function (nodes) {
  if (!this.value.containsAllMatchingElements(nodes)) {
    this.failureStrategy.fail('Expected ' + this.describe() +
      ' to contain elements matching all of ' +
      format(nodes) + '.');
  }
  return this;
};

/** Ensure that the subject element contains nodes matching any of the argument nodes.
    @return {WrapperSubject} `this` for chaining.
*/
WrapperSubject.prototype.containsAnyMatchingElements = function (nodes) {
  if (!this.value.containsAnyMatchingElements(nodes)) {
    this.failureStrategy.fail('Expected ' + this.describe() +
      ' to contain elements matching any of ' +
      format(nodes) + '.');
  }
  return this;
};

/** Ensure that the subject element does not contains nodes matching any of the argument nodes.
    @return {WrapperSubject} `this` for chaining.
*/
WrapperSubject.prototype.containsNoMatchingElements = function (nodes) {
  if (this.value.containsAnyMatchingElements(nodes)) {
    this.failureStrategy.fail('Expected ' + this.describe() +
      ' to contain no elements matching any of ' + format(nodes) + '.');
  }
  return this;
};

module.exports = WrapperSubject;
