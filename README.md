# Certainty-Enzyme ![](https://travis-ci.org/viridia/certainty-enzyme.svg?branch=master)

## Introduction

**Certainty-Enzyme** extends the [Certainty](https://github.com/viridia/certainty) assertion
library with assertion methods for React Enzyme wrapper objects.

Example:

```javascript
import { mount } from 'enzyme';
import { ensure } from 'certainty';
import 'certainty-enzyme';

// Assert that the component element has the expected CSS class.
const component = mount(<MyComponent />);
ensure(component).is('.selected');
```

## ReactWrapper and ShallowWrapper assertions

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
```

Note: Additional assertion methods may be added later once I figure out a suitably grammatical way
to phrase the failure messages.
