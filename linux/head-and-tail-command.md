# `head` and `tail` commands

Sometime we don't want to print everything in a file (the file might be too big), and we just want to look at specific part of it.

## `head` command

`head` command is used to **prints the _first 10 lines_ of a file to [`stdout`](./standard-output.md)** (terminal screen). If _no file specified_, `head` expect to **read input from `stdin`** (keyboard).

**Syntax**:

```bash
head [option]... <target-file>...
```

### `-n <num> flag`

Most of the time, `head` command usually used with `-n <num>` flag to _specify the exact first number of lines_ to print.

**Syntax**:

```bash
head -n <num> <target-file>
```

**Example**:

```bash
# Print the first 10 line of a file.
head file1.txt

# Print the first 5 line of a file.
head -n 5 file1.txt
```

## `tail`

`tail` command is used to **prints the _last 10 lines_ of a file to [`stdout`](./standard-output.md)** (terminal screen). If _no file specified_, `tail` expect to **read input from `stdin`** (keyboard).

**Syntax**:

```bash
tail [option]... <target-file>...
```

### `-n <num> flag`

Most of the time, `tail` command usually used with `-n <num>` flag to _specify the exact last number of lines_ to print.

```bash
tail -n <num> <target-file>
```

**Example**:

```bash
# Print the last 10 line of file.
tail file1.txt

# Print the last 5 line of file.
tail -n 5 file1.txt

```

## Related

- [`stdout`](./standard-output.md)
- [`stdin`](./standard-input.md)
- [Positional Argument](./positional-arguments.md)
- [Terminal Shortcut](./terminal-shortcut.md)
