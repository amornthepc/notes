# JavaScript Modules

**Module** is a way to split code into separate files and import only what you need to use across a codebase.

- **Scope**: Modules in JavaScript exist at the **file level** (1 file = 1 module)
- **Purpose**: For managing large application, and organizing dependencies instead of loading massive, single script

> By default, everything inside a file/module is **private**, To share these members with other file to use. You have to _export_ them (make it public). Then, any file that wants to use those shared pieces just needs to _import_ them.

## CommonJS (CJS) Modules

CommonJS is the Old Way of using JavaScript Module specific in Node.js, You can't use it in the browser without bundler.

> CommonJS is become less preferred way to use module. (They're modern way)

### CJS Exporting (`module.exports`)

`module.exports` is object, which used to exporting members of module for other modules to use.

```js
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract,
};
```

### CJS Importing (`require`)

`require` is function, which used to import and use members from another file.

```js
// main.js
const { add, sbutract } = require("./math.js");

console.log(add(1, 2));
```

## ES6 Modules (Modern JS Modules)

**ES6 module** are the _preferred way_ of using modules in JavaScript. (Support in modern browser and Node.js)

> The syntax of ES6 modules for export/import is so simple. You can just `export` and `import` keyword

### ES6 Exporting (`export`)

`export` keyword is used to exporting members of file/module for other modules to use.

```js
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

or

```js
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

export { add, subtract };
```

### ES6 Importing (`import`)

`import` keyword is used to import members from another file/module to use inside file.

```js
//main.js
import { add, subtract } from "./math.js";

console.log(add(1, 2));
```

## Node.js Modules

By default, Node.js use the _CommonJS_ syntax for modules. There're two ways you can manually switch to _ES6 Module_ syntax (should do):

1. Add `"type": "module"` into your [`package.json`](/npm.md#what-is-packagejson-file) file (**Preferred Way**)

```json
{
  "name": "<project-name>",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "type": "module", // <- add here
  "scripts": {
    "start": "node main.js"
  }
}
```

2. Rename your module files to `.mjs` instead of `.js`

## Browser Modules

Modern browsers support ES6 modules, but if you has _normal_ old script tags, those script `.js` file will not be treated as modules. They will execute one after the other in order they appear in HTML

```html
<!-- Old Normal Script tags (not support module) -->
<script src="./script.js"></script>
<script src="./script2.js"></script>
```

### Enable ES6 modules in Browsers

You need to use `type="module"` attribute on script tags

```html
<!-- support module -->
<script src="./script.js" type="module"></script>
```

### Benefits of Browser Modules

- **No Global variables are added**: Variables and Functions defined inside a module are private and scoped only to the file (module scope). To access them, you must explicitly use `import` and `export`
- **Deferred Execution Modules by default**: The browser parses the entire HTML document first before executing the module code, preventing the script from blocking page rendering.
- **Strict Mode is enabled by default!**

## Default Exports

**Default Exports** are used only when you want to export a _single value_ from module

```js
// math.js
const add = (a, b) => a + b;

export default add;
```

### Importing Default Export

**DON'T NEED CURLY BRACES** when importing a default export

```js
// main.js
import add from ".math.js";
```

> [!WARNING]
> `export const add = (a, b) => a + b;`
> Named Exports require **Curly Braces** while importing `import { add } from "./utils.js"`

> [!TIP]
> Sticking with the Named Exports make it much easier to add more thing we want to exports from the file later in the future

## Importing vs Destructuring (FUN FACT?)

**Importing is NOT _Destructuring_**, It looks like but it doesn't copy variables, It reates a direct, read-only link to the original file. That mean it immutable you can't reassign or change the value of imported variable
