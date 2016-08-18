var subjectFactory = require('certainty').subjectFactory;
var ReactWrapperSubject = require('./lib/reactWrapperSubject');
var formatReactWrapper = require('./lib/formatReactWrapper');
var registry = require('certainty/lib/format/registry');
var ReactWrapper = require('enzyme').ReactWrapper;

// Subject types
subjectFactory.addType(
  function (v) { return v instanceof ReactWrapper },
  ReactWrapperSubject
);

// Formatter types
registry.addType(function(v) { return v instanceof ReactWrapper; }, formatReactWrapper);
