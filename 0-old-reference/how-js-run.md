# How JavaScript Run

JavaScript execution separate into 2 phase: Setup & Run

## Phase 1: Memory Allocation Phase (The Scan)

> [!NOTE]
> Also called Creation Phase

The JavaScript engine scan the code _before_ running it.

- It sets up the **Lexical Environment** (memory space) and registers all variables and function names.
- Status: for `let`/`const` variables are marked _uninitialized_, `var` is set to `undefined`, and _function declaration_ are fully initialized.

## Phase 2: Execution Phase (The Run)

- JavaScript engine goes back to the top and actually executes code line-by-line from top to bottom, left to right also depend on priority.
- Status: **Variables** will get assigned their real values as the engine hit its declaration line.
