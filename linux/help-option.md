# Help Option

**help option** (either _flags_ or _positional arguments_) is used to _print a quick start guide explaining how to use the command_ directly in the terminal's standard output (`stdout`) — It is designed to be faster and easier to read than a full `man` command.

> By convention, most command-line tools have a _help_ option by default.

## How to Access Help Option

You can usually display the help menu in one o three ways:

```bash
# Syntax: <COMMAND> -h | --help | help

# 1. Long Flag (Most Common)
grep --help

# 2. Short Flag
grep -h


# 3. Positional Argument (Many command do not support this)
git help
```

---

## Related

- [`man` command](./man-command.md)
- [CLI](/linux/cli-vs-gui.md#cli-command-line-interface)
