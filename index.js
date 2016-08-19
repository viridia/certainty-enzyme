var subjectFactory = require('certainty').subjectFactory;
var ReactWrapperSubject = require('./lib/reactWrapperSubject');
var ShallowWrapperSubject = require('./lib/shallowWrapperSubject');
var formatWrapper = require('./lib/formatReactWrapper');
var registry = require('certainty/lib/format/registry');
var enzyme = require('enzyme');

// Subject types
subjectFactory.addType(
  function (v) { return v instanceof enzyme.ReactWrapper },
  ReactWrapperSubject
);

subjectFactory.addType(
  function (v) { return v instanceof enzyme.ShallowWrapper },
  ShallowWrapperSubject
);

// Formatter types
registry.addType(function(v) { return v instanceof enzyme.ReactWrapper; }, formatWrapper);
registry.addType(function(v) { return v instanceof enzyme.ShallowWrapper; }, formatWrapper);
