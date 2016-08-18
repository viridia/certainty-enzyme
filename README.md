# Certainty-Enzyme

## Introduction

**Certainty-Enzyme** extends the [Certainty](https://github.com/viridia/certainty-dom) assertion
library with assertion methods for React Enzyme wrapper objects.

Example:

```javascript
import { mount } from 'enzyme';
import { ensure } from 'certainty';
import 'certainty-enzyme';

// Assert that the body element has the expected tag name.
const component = mount(<MyComponent />);
ensure(component).is('.selected');
```

## Element assertions

```javascript
ensure(componentOrNode).hasClass(clsName);
```
