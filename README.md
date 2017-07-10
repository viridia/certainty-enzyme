# Certainty-Enzyme ![](https://travis-ci.org/viridia/certainty-enzyme.svg?branch=master)

## Introduction

**Certainty-Enzyme** extends the [Certainty](https://github.com/viridia/certainty) assertion
library with assertion methods for React Enzyme wrapper objects.

Example:

```javascript
import { mount } from 'enzyme';
import { ensure } from 'certainty';
import 'certainty-enzyme';

// Assert that the component element matches the given CSS selector expression.
const component = mount(<MyComponent />);
ensure(component).is('.selected');
```

## ReactWrapper and ShallowWrapper assertions

These assertions correspond to the various boolean-valued methods on the Enzyme wrapper objects:

```javascript
ensure(componentOrNode).exists();
ensure(componentOrNode).is(selector);
ensure(componentOrNode).isNot(selector);
ensure(componentOrNode).hasClass(clsName);
ensure(componentOrNode).doesNotHaveClass(clsName);
ensure(componentOrNode).hasAttribute(attrName).withValue(value);
ensure(componentOrNode).contains(nodeOrNodes);
ensure(componentOrNode).doesNotContain(nodeOrNodes);
ensure(componentOrNode).containsMatchingElement(nodes);
ensure(componentOrNode).containsAllMatchingElements(nodes);
ensure(componentOrNode).containsAnyMatchingElements(nodes);
ensure(componentOrNode).containsNoMatchingElements(nodes);

// Return a StringSubject for attributes or node text with pre-populated subject name.
ensure(componentOrNode).attribute('class').startsWith(someString);
ensure(componentOrNode).text().includes(someString);
```

Note: Additional assertion methods may be added later once I figure out a suitably grammatical way
to phrase the failure messages. Also, some of the boolean-valued methods on ReactWrapper are
a bit non-intuitive - .isEmpty() returns true if the wrapper contains an empty list of nodes, not
a node that has no children.
