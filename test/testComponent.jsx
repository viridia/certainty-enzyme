var React = require('react');
module.exports = {};

var ChildComponent = React.createClass({
  displayName: 'ChildComponent',
  render: function () {
    return (<div className="child-component"></div>);
  },
});
module.exports.ChildComponent = ChildComponent;

var TestComponent = React.createClass({
  displayName: 'TestComponent',
  render: function () {
    return (<div className="test-component" disabled name="test">
      Test
      <span className="inner-span" />
    </div>);
  },
});
module.exports.TestComponent = TestComponent;
