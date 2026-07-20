# Recursive Flags — `r`, `R`

**Recursive Flags** (`-r` or `-R`) is modifier that tells a command to repeatedly apply its operation to all files inside a target directory and everything inside its nested sub-directories.

- `-r`, `--recursive`
- `-R`, `--dereference-recursive`

## Most Common Usages

Mostly use to apply to a command so it can operate on an entire directory structure.

```bash
# Copy the entire directory: without `-r` flag, it will fail
cp -r source_directory ~/copied_directory

# Remove an entire directory: without `-r` flag, it is not allowed to do.
rm -r slop_project/
```

---

## Related

- [CLI (Command Line Interface)](./command-line-interface.md)
- [`cp` command](./cp-command.md)
- [`rm` command](./rm-command.md)
