# `mkdir` (_Make Directory_) command

`mkdir` (_make directory_) command is used to **create a new directory** at a specified directory path (or inside the [_current working directory_](./current-working-directory.md) by default). — `mkdir` will throwing an error if the directory already exist.

**Syntax**:

```bash
mkdir [option]... <target-directory>...
```

**Example**:

```bash
# Create a new directory named "new_dir" at current working directory.
mkdir new_dir

# Create a new directory named "workspace" at home directory.
mkdir ~/workspace
```

## Common Flags

### `-p`, `--parents` (parent):

What the `-p` flag does?:

- Create the directory without throwing an error if it already exists.
- **Automatically create any missing parent directories** along the given path to make sure it's ready to use.

```bash
mkdir -p ~/workspace/dojo/bootdotdev
```

**Scenario 1**: `workspace` is an empty directory. — The command above will create a `dojo` directory inside `workspace` and then create a `bootdotdev` directory inside a `dojo`.

**Scenario 2**: `~/workspace/dojo/bootdotdev` already exists. — The command will not throw an error, and does nothing to existing the directories.

---

## Related

- [Directory](./directory.md)
- [Command Line](./command-line-interface.md)
- [Flags](./flags.md)
