# `grep` (Globally search for a Regular Expression and Print) command

`grep` command is used to search for specific text inside files or standard output (`stdout`) from another command, then prints the matching lines to `stdout`. — By default `grep` is _case-sensitive_ (meaning uppercase and lowercase letters must match exactly).

> [!IMPORTANT]
> The double quotes `""` are not part of the search text itself; they are used to group words together if search term contains spaces (e.g. `Hello World!`)

```bash
# grep <search-text> <path-to-target-file>
grep "hello" words.txt

# Search inside multiple file at once by listing target files
grep "hello" file1.txt file2.txt
```

The first example searches for word `"hello"` inside `words.txt`. It will print every line in file that contains the exact match.

## `grep` command uses Regex

`grep` command uses [**Regex (Regular Expression)**](./regular-expression.md) pattern to search through text more precisely. — Not [Globbing](./globbing.md) pattern, the one that use in terminal.

```bash
env | grep "^PATH" # Matches anything start with PATH
```

## Common Flags

### `-r`, `--recursive`: Search all files inside directory

`-r` flag is used to search for the text inside **all files within a specified directory and all of its sub-directories** — It scans the text content of an entire directory at once.

```bash
# grep [options/flag] <search-text> <target-directory>

# Search all files inside the logs directory and every nested sub-directory
grep -r "CRITICAL" ./logs

# Search all files inside your current directory and every nested sub-directory
grep -r "CRITICAL" .
```

### `-n`, `--line-number`: Display with line number

`-n` flag prefixes each matching line in the output with line number from the file. (starting at 1)

```bash
grep -n "command" file.txt
```

### `-i`, `--ignore-case`: Ignore case sensitive

`-i` flag forces `grep` to ignore case differences, matching both uppercase and lowercase letters.

```bash
# This will match "hello", "Hello", "HELLO", "HeLLo", etc.
grep -i "hello" file.txt
```

---

## Related

- [Grep in LazyVim](./grep-in-lazyvim.md)
- [Regular Expression](./regular-expression.md)
