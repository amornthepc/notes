# Vite

## Bundlers

**Bundler** are tools that take a modular codebase (hundreds of separate files used during development) and transforms/merges them into a few optimized files ready for production.

### Key Features

- **Bundling**: Combining multiple modules/files into a single file. (just a container)
- **Minification**: Making your code/file size smaller by removing unnecessary whitespace.
- **Tree Shaking**: Removing unused code from the final output/bundle.
- **Code Splitting**: Splitting code into smaller chunks so it can be loaded on-demand.
- **Asset Optimization**: Optimizing images, fonts, and other assets. (e.g. turn image into WebP format for performance)
- **Source Map**: Generating debug files that allow you to debug your code in the browsers as if it were still in its original form.
- **Polyfilling**: Injecting custom runtime fallback code for missing modern APIs (like `Promise.any()`` or `Array.prototype.flat()`)
- **Transpilation**: Rewrite modern syntax feature (like arrow function or string interpolation) into older equivalents so old browsers can run/read it.

## Vite The Modern Bundler

**Vite** is most popular and modern bundler. Which is faster and easier to configure than older bundlers like _Webpack_.

> [!NOTE]
> By default, **Vite** handles _transpilation_ automatically using engine called _esbuild_, But it _does not_ automatically handle _polyfilling_ for missing APIs. To get full backward compatibility, you must explicitly add the official `@vitejs/plugin-legacy` to your project.

### Basic Setup & Usage

1. Installation

Install Vite as a development dependency:

```js
npm i -D vite
```

> [!IMPORTANT]
> Requires Node.js 20.19.0+ or 22.12.0+

2. Configuration

Create file name `vite.config.js` at the root to tell _Vite_ how to build a Node-executable library/CLI (**That will run directly in the terminal or be imported into other projects as tool**) rather than a browser app.

```js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "main.js", // The entry point file
      formats: ["es"], // Outputs as ES modules
    },
  },
});
```

3. Packages Scripts

Modify `package.json`, by add the _build_ script and point your start script to the output folder (`dist/`)

```json
{
  "scripts": {
    "build": "vite build",
    "start": "node dist/heifer.js"
  }
}
```

4. Workflow Commands

- **Compile Code**: `npm run build` (Generate the optimized code into `dist/` directory)
- **Run the Production Code**: `npm run start`

> [!TIP]
> Always add the _generated code_ like `dist/`, `node_module/` to your `.gitignore`, Since version control should not be tracked those files that can be re-generated anytime.

#### How Vite Build Works Under the Hood

When you execute `npm run build` (which config to command `vite build`), _Vite_ automatically looks for `vite.config.js` at the project root. It uses the `entry` path that specified (`main.js`) as the starting point, look for all connected code imports, and bundles everything into highly optimized code inside the `dist/` directory using the `format` that specified.

> [!NOTE]
> That why we need to config the start script to `node dist/<name>.js` to run the optimized code.
