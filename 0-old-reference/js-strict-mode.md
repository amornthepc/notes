# JavaScript's Strict Mode

**Strict Mode** is a way to use more restrictive rules with JavaScript, to help catch errors earlier and prevent silent errors.

## Benefits

The big difference between strict mode and normal _sloppy_ JavaScript are:

- Eliminates silent errors by throwing explicit errors.
- Help JS engines optimize code (run faster)
- Block syntax that likely to be used in future ECMAScript versions.
- Set `this` keyword to `undefined` in the global scope (In the browser)

> In a nutshell just use **Strict Mode**, It's better.

## Enable Strict Mode

To enable strict mode, just need to add `"use strict"` at the top of your file:

```js
"use strict";

// Code here
```

You can also enable strict mode for a single function

```js
function strictFunction() {
  "use strict";

  // Function Code
}
```

## Strict Mode in Modern JavaScript (ES6)

For Modern JavaScript (ES6) modules are always in _strict mode by default_ (for both browser and Node.js), So you don't need to manually add the directive `"use strict"`
