# Temporal Dead Zone

**Temporal Dead Zone** (TDZ) is the zone before entering a scope and line where a variable declared (`let` or `const`), When script start js known variable exists in memory (_uninitialized_) but you can't access it, if you try to access it will throw `error`

```js
// ==== TDZ Start ====

// console.log(favNumber) // Reference Error

// ==== TDZ End ====
let favNumber = 69;
```
