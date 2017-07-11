var subjectFactory = require('certainty').subjectFactory;
var ReactWrapperSubject = require('./lib/reactWrapperSubject');
var ShallowWrapperSubject = require('./lib/shallowWrapperSubject');
var registry = require('certainty/lib/format/registry');
var enzyme = require('enzyme');
var React = require('react');

// We need to compare names because of npm version skew
function isReactWrapper(v) {
  return v instanceof enzyme.ReactWrapper ||
    (v && v.constructor && v.constructor.name === 'ReactWrapper');
}

function isShallowWrapper(v) {
  return v instanceof enzyme.ShallowWrapper ||
    (v && v.constructor && v.constructor.name === 'ShallowWrapper');
}

// Subject types
subjectFactory.addType(
  isReactWrapper,
  ReactWrapperSubject
);

subjectFactory.addType(
  isShallowWrapper,
  ShallowWrapperSubject
);

// Formatter functions
function formatWrapper(value, _options) {
  if (!value.exists()) {
    return '[nonexistent-node]';
  }
  return '<' + value.name() + '>';
}
registry.addType(isReactWrapper, formatWrapper);
registry.addType(isShallowWrapper, formatWrapper);
var reactElementType = React.createElement('div').$$typeof;
registry.addType(
  function(v) { return v && v.type && v.props && v.$$typeof == reactElementType; },
  function(v) {
    var result = '<' + v.type;
    for (var k in v.props) {
      result += ' ' + k + '=' + registry.format(v.props[k]);
    }
    return result + '>';
  });
registry.addType(
  function(v) { return v && v.prototype && v.prototype.isReactComponent; },
  function(v) {
    return '<' + v.displayName + '>';
  });
