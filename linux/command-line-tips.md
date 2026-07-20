# Command Line Tips

## Running Commands Conditionally

You can group multiple commands together on a single line to control how they run based on the exit codes of the previous commands.

### Run Multiple Commands on a Single Line

#### 1. Sequential Execution (`;`)

**Use semicolon (`;`)** to separate command, The shell will run the first command and then immediately run the second command (**one after the other, in order**), whether the first command succeeds (exit code is 0) or not.

**Syntax**:

```bash
command1 ; command2
```

#### 2. Logical AND (`&&`)

**Use the AND operator (`&&`)**. The shell runs the first command. **Only if it succeeds (exit code is 0)**, then runs the second command.

**Syntax**:

```bash
command1 && command2
```

#### 3. Logical OR (`||`)

**Use OR operator (`||`)**. The shell runs the first command. **Only if it fails (exit code is NOT 0)**, then runs second command.

**Syntax**:

```bash
command1 || command2
```

> [!NOTE]
> The reason `&&` and `||` operator behave like this because the shell use logical **short-circuit evaluation**, meaning if the result is already guaranteed by the first command, the shell skips the rest remaining execution.

---

## Related

- [CLI](./command-line-interface.md)
- [Shell](./shell.md)
- [Command Lines](/linux/linux-contents.md#command-line)
