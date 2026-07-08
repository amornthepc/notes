# Higher Order Functions

**Higher Order Functions** are function that either **receives** another function as an argument or function that **returns** a new function or **BOTH**

> [!NOTE]
> Higher Order function is possible because for _first-class functions_

## Function that Receives Another Function

It's a function that receives _callback functions_ as argument to use inside, Which will call later.

> [!NOTE]
> _callback_ function is a function that was send as argument to other function to use.

```js
const greet = () => console.log("Hello, World!");
closeBtn.addEventListener("click", greet);
```

- `addEventListener` is _higher order_ function (receive another function)
- `greet` is _callback_ function (don't care how it work just receive and execute it)

## Function that Returns new Function

```JavaScript
function count() {
  let counter = 0;
  return function() {
    counter++;
  }
}
```

- `count()` is _higher order_ function (return new function)
- `return function() {}` is returned function
