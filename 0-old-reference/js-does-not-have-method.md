# JavaScript Doesn't Have METHOD

**Actually JavaScript does NOT have "_METHOD_"** concept, It only have functions, and object's properties just hold references to them.

> [!NOTE]
> Method in JavaScript is regular function expression store in property

So, **Regular Function** is _independent_, you can take that same function and share it across completely different objects (pass it as value/argument). And **`this` will magically change depending on who calls it**.

```js
function shareableFunction() {
  console.log(`I belong to ${this.name}`);
}

const targetObj = { name: "Target Store", pointToFunc: shareableFunction };
const walmartObj = { name: "Walmart", pointToFunc: shareableFunction };

// The exact same function behaves differently based on the "dot" prefix!
targetObj.pointToFunc(); // "I belong to Target Store"
walmartObj.pointToFunc(); // "I belong to Walmart"
```

## The _Execution Context_ Rule (Only for Regular Function)

Because Regular Functions are _INDEPENDENT_, JavaScript determines what `this` means at the time function is _executed/invoked_ (Not when it's defined)

- **With a dot (`.`)**: if called like method `obj.func()`, `this` is the object before the dot.
- **Without a dot**: if called like `func()`, `this` falls back to `undefined` (in strict mode)
