# Pipe Operator

**Pipe Operator** (`|`) is symbol used to take the [`stdout`](./standard-output.md) of the program on the left and _pipes_ it into the [`stdin`](./standard-input.md) of the program on the right.

**Syntax**:

```bash
# syntax:
command1 | command2
```

**Example**:

```bash
echo "I'm better than you, and you know it!" | wc -w
# 8
```

In the example above, the `echo` command usually sends text as `stdout` to print to the terminal screen, but instead it was _piped_ into another command (`wc`) as its `stdin`.

> [!WARNING]
> This only works because the most shell commands (include `wc`), can read from a `stdin` when no file path argument is provided. — It not pipes data as command argument but as standard input!

---

## Related

- [`stdout`](./standard-output.md)
- [`stdin`](./standard-input.md)
- [program](/cs-fundamentals/program.md)
- [Command Line](/linux/command-line-interface.md)
