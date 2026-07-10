# Process

**Process** is a _running program_ on your computer. Whether it is your web browser (Chrome), Discord, terminal (Kitty), text editor (VSCode, Neovim), a shell script, or a back-end server. — the Operating System runs it as an [isolated process](./isolated-process.md) with its own memory space and a unique ID called a [**PID** (Process ID)](./process-id.md).

## Process Relationships: Parent vs. Child

Processes don't just run completely alone; they can launch other programs. This create relationship:

- **Parent Process**: The first original program that launches another program. (e.g. terminal)
- **Child Process**: The new program that was launched by the _parent process_. (e.g. scripts or server running inside that terminal)

> [!NOTE]
> "Parent" and "Child" are the exact same type of process under the hood, The names simply describe the relationship between them based on who launched who.

### Real-World Example

When you open terminal, the terminal starts up as **Parent Process**. After that, if you run any executable script or back-end server inside it:

1. the terminal becomes the **Parent Process**.
2. Your script or back-end application is a **Child Process** of that terminal.
