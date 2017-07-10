/* eslint-env node, mocha */
var React = require('react'); // eslint-disable-line no-unused-vars
var ensure = require('certainty').ensure;
var mount = require('enzyme').mount;
var TestComponent = require('./testComponent.jsx').TestComponent;
require('../index');

function assertThrows(f, msg) {
  try {
    f();
  } catch (e) {
    // Uncomment to show source of exception instead of text differences. Can't show both.
    // if (String(e) != 'Error: ' + msg) {
    //   throw e;
    // }
    ensure(String(e)).named('message').equals('Error: ' + msg);
    return;
  }
  throw new Error('expected assertion failure with message: \'' + msg + '\'');
}

describe('ensure.ReactWrapper', function () {
  var component;
  var div;

  beforeEach(function () {
    component = mount(<TestComponent/>);
    div = component.find('div');
  });

  it('.exists', function () {
    ensure(component).exists();
    assertThrows(function () { ensure(div.find('footer')).exists(); },
      "Expected [nonexistent-node] to exist.");
  });

  it('.is', function () {
    ensure(component).is(TestComponent);
    ensure(div).is('.test-component');
    assertThrows(function () { ensure(div).is('.invalid'); },
      "Expected <div> to match selector '.invalid'.");
  });

  it('.isNot', function () {
    ensure(div).isNot('.another-component');
    assertThrows(function () { ensure(div).isNot('.test-component'); },
      "Expected <div> to not match selector '.test-component'.");
  });

  it('.hasClass', function () {
    ensure(div).hasClass('test-component');
    assertThrows(function () { ensure(div).hasClass('invalid'); },
      "Expected <div> to have class 'invalid'.");
    assertThrows(function () { ensure(component).hasClass('invalid'); },
      "Expected <TestComponent> to have class 'invalid'.");
  });

  it('.doesNotHaveClass', function () {
    ensure(div).doesNotHaveClass('another-component');
    assertThrows(function () { ensure(div).doesNotHaveClass('test-component'); },
      "Expected <div> to not have class 'test-component'.");
  });

  it('.contains', function () {
    ensure(component).contains(<span className="inner-span" />);
    assertThrows(function () { ensure(div).contains(<span className="other" />); },
      "Expected <div> to contain <span className=\"other\">.");
  });

  it('.doesNotContain', function () {
    ensure(component).doesNotContain(<span className="other" />);
    assertThrows(function () { ensure(component).doesNotContain(<span className="inner-span" />); },
      "Expected <TestComponent> to not contain <span className=\"inner-span\">.");
  });

  it('.containsMatchingElement', function () {
    ensure(component).containsMatchingElement(<span className="inner-span" />);
    assertThrows(function () {
      ensure(component).containsMatchingElement(<span className="other" />);
    }, "Expected <TestComponent> to contain element matching <span className=\"other\">.");
  });

  it('.containsAllMatchingElements', function () {
    ensure(component).containsAllMatchingElements(
      [<span className="inner-span" />]);
    assertThrows(function () {
      ensure(component).containsAllMatchingElements([<span className="other" />]);
    },
    "Expected <TestComponent> to contain elements matching all of [<span className=\"other\">].");
  });

  it('.containsAnyMatchingElements', function () {
    ensure(component).containsAnyMatchingElements(
      [<span className="inner-span" />, <span className="other" />]);
    assertThrows(function () {
      ensure(component).containsAnyMatchingElements([<span className="other" />]);
    },
    "Expected <TestComponent> to contain elements matching any of [<span className=\"other\">].");
  });

  it('.containsNoMatchingElements', function () {
    ensure(component).containsNoMatchingElements([<span className="other" />]);
    assertThrows(function () {
      ensure(component).containsNoMatchingElements(
        [<span className="other" />, <span className="inner-span" />]);
    }, "Expected <TestComponent> to contain no elements matching any of " +
        "[<span className=\"other\">, <span className=\"inner-span\">].");
  });

  it('.hasAttribute()', function () {
    ensure(div).hasAttribute('disabled');
    ensure(div).hasAttribute('name').withValue('test');
    assertThrows(function () { ensure(div).hasAttribute('invalid'); },
      "Expected <div> to have an attribute named 'invalid'.");
    assertThrows(function () { ensure(div).hasAttribute('name').withValue('bad'); },
      "Expected <div> to have an attribute 'name' with value \"bad\", " +
      "actual value was \"test\".");
  });


  it('.doesNotHaveAttribute()', function () {
    ensure(div).doesNotHaveAttribute('invalid');
    assertThrows(function () { ensure(div).doesNotHaveAttribute('name'); },
      "Expected <div> to not have an attribute named 'name'.");
  });

  it('.attribute()', function () {
    ensure(div).attribute('disabled').exists();
    ensure(div).attribute('name').equals('test');
    assertThrows(function () { ensure(div).attribute('invalid'); },
      "Expected <div> to have an attribute named 'invalid'.");
    assertThrows(function () { ensure(div).attribute('name').equals('bad'); },
      "Expected attribute 'name' of <div> to be \"bad\", " +
      "actual value was \"test\".");
  });

  it('.text()', function () {
    ensure(div).text().equals('Test');
  });
});
