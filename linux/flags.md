# Flags (Options)

**flag** is a modifier option added to a command to change how it works or to turns on extra features.

```bash
<COMMAND> [OPTION]...
```

**Example**

`ls` command take a `-l` flag to show a "_long listing format_":

```bash
ls -l
```

Or the `-a` flag to show "_all_" files and directories, including the hidden one:

```bash
ls -a
```

You can combine short flags together to use multiple option at once:

```bash
ls -al
```

> [!WARNING]
> Long flags can't combine to single word! You must separate them with spaces:

```bash
ls --all -l
```

## Flags Conventions

How a command handles flags depends entirely on the developer who wrote it, but there're two conventions:

- **Short Flags** (`-f`): Single-character flags are prefixed with a single dash (e.g. `-r`) — Mostly used when typing manually in the terminal because they are fast to write.
- **Long Flags** (`--flag`): Multi-character word flags are prefixed with a two dash (e.g. `--recursive`) — Mostly used in shell scripts because they explicit explain what it does.

> [!TIP]
> Often, the same options can be used with either a short or long flag (e.g. `h` or `--help`) to perform the same task.

---

## Related

- [CLI](/linux/cli-vs-gui.md#cli-command-line-interface)
- [Help Option](./help-option.md)
