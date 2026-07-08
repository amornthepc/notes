# `this` keyword in JavaScript

`this` depends entirely on _**how and where**_ a function is called (Its execution context)

## Global Context

### Non-Strict

- _On Browser_: `this` refers to the `window` object.
- _On Node.js_: `this` refers to `module.exports` object (`{}`), Not `global`.

### Strict Mode

`this` becomes `undefined` in the global scope in both the _browser_ and _node.js_

## Method Context

Inside a standard _method_ or _constructor_, `this` refers to the _object_ that method is called on.

```js
const myObject = {
  message: "Hello, World!",
  myMethod() {
    // 'this' points to myObject
    console.log(this.message); // Hello, World!
  },
};
myObject.myMethod();
```

> [!NOTE]
> Instance Methods are only regular function expression.
>
> 1. You can't use function declaration to define method (syntax error).
> 2. For Arrow function `this` is difference and not refer to object it called.

> [!NOTE]
> [JavaScript doesn't have _method_](js-does-not-have-method.md)

## Arrow Function

`this` in _arrow function_ depends on _where_ it was defined, which refers to the same context as its parent. (**In essence arrow function _remember_ the `this` context where it was created.**)

### Object Literal

Arrow function inside a plain object, `this` doesn't point to the object. It leaking and points to whatever was outside (usually global or `undefined`)

> [!NOTE]
> The reason it leaks to the outside context is because an **_object literal_ (`{...}`) does not create new scope.**, Unlike function and block

### Class Fields and Callbacks

Because arrow functions remember where they were born, they're immune to getting _lost_ when pass around as callbacks.

```js
class Counter {
  count = 0;

  // DEFINED inside the class constructor scope
  increment = () => {
    this.count++;
    console.log(this.count);
  };
}

const myCounter = new Counter();
const looseIncrement = myCounter.increment;

// Even without the dot (no object context), it still works!
looseIncrement(); // 1 (It remembered 'this' from when it was defined, which point to the object)
```

## Cheatsheet

- **Regular Function**: `this` dynamic depend about **HOW** and **WHO** called it. (Look at the object before dot `.`)
- **Arrow Function**: `this` is static. It depend only **WHERE** it was defined in code. (for object literal with will leaking to other context/scope)
