# First-Class Functions

JavaScript treat functions as **first-class citizen**, Which means that functions are simply **Values**.

> [!IMPORTANT]
> _Type_ of Function is Object.

> [!WARNING]
> `typeof function() {}` will return `function`, Which is a bug. It's actually an Object.

## Functions are Values so its CAN:

### Store Functions in Variables or Properties:

```js
const add = (a, b) => a + b;
```

```js
const counter = {
  value: 23,
  increment: function () {
    this.value++;
  },
};
```

### Pass Functions as Arguments to OTHER Functions:

```JavaScript
closeBtn.addEventListener("click", <function-name>);
```

### Return Functions FROM another Functions.

### Call Method on Function (Function's Method)

We can call methods on functions:

```js
counter.incement.bind(OtherObject);
```
