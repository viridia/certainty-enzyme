var subjectFactory = require('certainty').subjectFactory;
var ReactWrapperSubject = require('./lib/reactWrapperSubject');
var ShallowWrapperSubject = require('./lib/shallowWrapperSubject');
var registry = require('certainty/lib/format/registry');
var enzyme = require('enzyme');
var React = require('react');

// Subject types
subjectFactory.addType(
  function (v) { return v instanceof enzyme.ReactWrapper },
  ReactWrapperSubject
);

subjectFactory.addType(
  function (v) { return v instanceof enzyme.ShallowWrapper },
  ShallowWrapperSubject
);

// Formatter functions
function formatWrapper(value, _options) {
  if (!value.exists()) {
    return '[nonexistent-node]';
  }
  return '<' + value.name() + '>';
}
registry.addType(function(v) { return v instanceof enzyme.ReactWrapper; }, formatWrapper);
registry.addType(function(v) { return v instanceof enzyme.ShallowWrapper; }, formatWrapper);
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
