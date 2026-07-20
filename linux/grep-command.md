# `grep` (Globally search for a Regular Expression and Print) command

`grep` command is used to search for specific text inside files or standard output (`stdout`) from another command, then prints the matching lines to `stdout`. — By default `grep` is _case-sensitive_ (meaning uppercase and lowercase letters must match exactly).

**Syntax**:

```bash
# input data from argument
grep <search-text> <target-file-path>

# input data from stdin
<stdin> | grep <search-text>
```

```bash
grep "hello" words.txt

# Search inside multiple file at once by listing target files
grep "hello" file1.txt file2.txt
```

> [!IMPORTANT]
> The double quotes `""` are not part of the search text itself; they are used to group words together if search term contains spaces (e.g. `Hello World!`)

The first example searches for word `"hello"` inside `words.txt`. It will print every line in file that contains the exact match.

## `grep` command uses Regex

`grep` command uses [**Regex (Regular Expression)**](./regular-expression.md) pattern to search through text more precisely. — Not [Globbing](./globbing.md) pattern, the one that use in terminal.

```bash
env | grep "^PATH" # Matches anything start with PATH
```

## Common Flags

### `-r`, `--recursive`: Search all files recursively while ignores symlinks

`-r` flag is used to search for the text inside **all files under a specified directory and its nested sub-directories** — But it **skips/ignores** [_symbolic links (symlinks)_](./symbolic-link.md) that point to external directories.

**Syntax**:

```bash
grep -r <search-text> <target-directory>
```

**Example**:

```bash
# Search all files inside the logs directory and every nested sub-directory
grep -r "CRITICAL" ./logs

# Search all files inside your current directory and every nested sub-directory
grep -r "CRITICAL" .
```

### `-R`, `--dereference-recursive`: Search files recursively include symlinks

`-R` flag is also used to search for the text inside **all files under a specified directory and its nested sub-directories** — But it **follow** [_symbolic links (symlink)_](./symbolic-link.md) out to search in external target.

### `--exclude-dir`: Exclude directories from recursive search

`--exclude-dir` flag is used to **excludes specified directory** (use [Glob Pattern](./globbing.md)) when running a `grep` command with a _recursive flag_

**Syntax**

```bash
grep -r --exclude-dir=GLOB_PATTERN "<search-text>" <target-directory>
```

**Example**:

```bash
# search specified text recursively in current directory but skip the "node_modules" directory
grep -r --exclude-dir=node_modules "CRITICAL" .

# Search specified text recursively in current directory but skip both "dist" and "build" directories.
grep -r --exclude-dir={dist,build} "CRITICAL" .
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
