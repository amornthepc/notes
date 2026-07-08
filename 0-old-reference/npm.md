# NPM (Node Package Manager)

[**NPM**](https://www.npmjs.com/) (Node Package Manager) is a package manager for JavaScript. It's the home of many useful libraries (hosting those libraries).

NPM use to manages project's third-party dependencies, metadata, and custom automation scripts so you don't have to build everything from scratch.

> We won't use `node` directly very often. Instead you'll use `npm` to install and manage packages.

## What is `package.json` file?

The `package.json` file is the heart & soul of Node.js project. It is a _configuration file_ used to manage:

- **Dependencies**: The packages your project relies on.
- **Scripts**: Custom terminal command for shortcuts.
- **Metadata**: Project name, version, author, and entry point file (e.g. `main.js`)

## Commands for Building a Project

### 1. Initializing a New Project

To start a new project and generate a fresh `package.json`, navigate to your project directory and run:

```bash
npm init -y
```

> The `-y` flag mean automatically accepts/yes to all default settings, skipping interactive prompts.

### 2. Create & Define Custom Scripts

Inside `package.json` file, you can define terminal command shortcuts under the `"script"` object, By define `property` as _name of the command_ and it's `value` as _command you want to execute_.

```json
{
  "name": "<project-name>",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "node main.js"
  }
}
```

### 3. Running Scripts

After defined custom scripts, You can execute it by use the `npm run <scripts-name>` command, Which will execute command that we specify as the value of that property name.

```bash
npm run start
```

> This will execute command that we defined in `packqage.json`, which in this case run `node main.js`

## `npm i -D` (Install as Development Dependency)

Full Name: `npm install --save-dev`

```bash
npm i -D
```

- `i` is short for _install_
- `-D` is short for `--save-dev`

The command use to installs a package _locally_ inside current project, but specifically it as a _development dependency_ (only for development phase) (saved under the `"devDependencies"` section in `package.json` file)

### Why use it?

These are tools only need while developing (writing, building, testing), But they're not needed to actually run the app in production.

- Examples: Testing frameworks (`jest`), Code formatters (`prettier`), linters (`eslint`), build tools (`vite`)
- Benefits: When app is deployed to a live server, production environment tools will skip installing these unnecessary, keeping the final project lightweight and fast.

## `npx` (Node Package Execute)

`npx` is allows you to _run/execute_ a package without permanently installing it on your computer or inside your project.

When you run `npx <package-name>`, npx will

1. Check if the package is already in your local project. If yes, then it will run.
2. If it's not there, npx temporarily download the latest version, runs the command and immediately deletes it from your system.

### Why use `npx`?

- _One-time tools_: Perfect for project initializers that you only use once (e.g. `npx create-react-app my-app`)
- _No clutter_: It prevents your computer from getting cluttered with global CLI tools that quickly become outdated. (no ununnecessary command install)
- _Always fresh_: It guarantees you're executing the absolute newest version of a tool every single time.
