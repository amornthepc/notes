# Polyfill and Transpiler

> [!IMPORTANT]
> It's a tools that make modern JavaScript compatible with old browser.

JavaScript is a language that primary runs in user's browser like Chrome, Firefox. (for front-end), The problem is you _CANNOT CONTROL THE RUNTIME_ or force user to updated their browser. If we write new JavaScript features, older browsers will crash.

To fix this, developers use two tools: _Polyfill_ and _Transpiler_ (Which developer using [Vite](./vite.md) to manage this tools)

> [!NOTE]
> For back-end we run on Server, So we control runtime that mean we can update our code, runtime or compiler so it has no this kind of problem

## Polyfil

**Polyfill** is an extra code that add functionality or methods that some browser might not support, So that your code can works.

## Transpiler

**Transpiler** is a tool that take entire modern JavaScript file and convert it into an older version that can work in all browsers.
