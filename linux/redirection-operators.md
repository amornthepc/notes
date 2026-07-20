# Redirection Operators

**Redirection Operators** (`>`, `<`, ...) are symbols used to redirect input/output [data streams](/cs-fundamentals/data-stream.md) to different destination.

> [!NOTE]
> For all **output redirection operator** (`stdout` or `stderr`) will **automatically create a new file if it does not already exist**.

## Redirect Standard Output (`stdout`)

```bash
# syntax: command ge
command (stdout) > target_file
```

**`>` or `1>`** is used to redirect [`stdout`](./standard-output.md) to a specified file by **overwriting** the data inside it.

```bash
echo "I want to become better." > goal.txt
cat goal.txt
# I want to become better.
```

**`>>` or `1>>`** is used to redirect [`stdout`](./standard-output.md) to a specified file by **appending** data to the end of file.

```bash
echo "Welcome to the Pain Zone!" >> goal.txt
cat goal.txt
# I want to become better.
# Welcome to the Pain Zone!
```

> [!TIP]
> Because the file descriptor number for `stdout` is `1`, you can omit the number and just use `>` or `>>` instead.

## Redirect Standard Error (`stderr`)

```bash
# syntax
command (stderr) 2> target_file
```

**`2>`** is used to redirect `stderr` to a specified file by **overwriting** the data inside it.

```bash
cat doesnotexist.txt 2> error.txt
cat error.txt
# cat: doesnotexist.txt: No such file or directory
```

**`2>>`** is used to redirect `stderr` to a specified file by **appending** data to the end of file.

```bash
unknowncommand 2>> error.txt
cat error.txt
# cat: doesnotexist.txt: No such file or directory
# unknowncommand: command not found
```

## Redirect Standard Input (`stdin`)

```bash
command < target_file (stdin source)
```

**`<` or `0<`** is used to redirect `stdin` from a only specified file into a program. The program read input data directly from the file instead of waiting for keyboard input.

```bash
cat fahhh.txt
# My life is cooked, but I will keep going.
wc -w < fahhh.txt
# 9
```

> [!TIP]
> Because the file descriptor number for `stdin` is `0`, you can omit the number and just write `<`.

> [!WARNING]
> `wc input.txt` and `wc < input.txt` is **NOT** the same under the hood.
>
> - `wc input.txt`: The program accepts file path string as an _argument_, and command itself is responsible for opening and reading the file.
> - `wc < input.txt`: The program knows nothing about the file. The Shell opens the file, extracts the file's content, and routes its straight into the program's `stdin`

---

## Related

- [Standard Streams](./standard-streams.md)
- [Standard Input](./standard-input.md)
- [Standard Output](./standard-output.md)
- [Standard Error](./standard-error.md)
