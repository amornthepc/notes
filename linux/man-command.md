# `man` command

`man` (_manual_) command is used to display the full manual of the specified program in interactive way.

**Syntax**:

```bash
man <command>
```

> [!WARNING]
> `man` command will only work for commands that provides a manual, but most built-in commands and Unix programs are already have one.

## Using `man` Command

```bash
man ls
```

## Tips: `man` command

### Searching

Nobody on earth will read _manual_ cover to cover just for fun, Most developers uses it as a _quick reference to look up_ for specific usage or special flags.— So we mostly search for text content in the _manual_ by pressing the `/` key, typing the search target (which uses a [_Regex Pattern_](./regular-expression.md)), and pressing enter.

After pressing `Enter`, if there are many matching results:

- Press `n` to jump forward to the next search result.
- Press `N` to jump backward to the previous search result.

```bash
man ls
# We enter interactive mode that display manual of ls command

# type `/<search-text>` then Enter to start searching for specific text
# type `/-r` then press Enter to start search for `-r` in the text content.

```

#### Find a Specific Flag

Using `^` caret symbol to search **only** a line that _begin with specified text_. By combining it with ` ` a space followed by the `+` plus symbol (to match one or more spaces), and end with _regex_ wildcard `.*` to match the rest of the line.

> [!NOTE]
> This technique stops from matching every random sentence that happens to contain the flags inside.

**Syntax**:

```bash
/^ +-<target-flag>.*
```

```bash
/^ +-r.*
```

> [!TIP]
> Because the definition of flag in `man` pages almost always start at the beginning of the line with whitespaces, followed by the `-` characters

> [!WARNING]
> This pattern work because we use _neovim_ (modern text editor), Normally we have to use escape character `\` before the `+` symbol

---

## Related

- [Command Line Interface](./command-line-interface.md)
- [Regex Pattern](/linux/regular-expression.md)
