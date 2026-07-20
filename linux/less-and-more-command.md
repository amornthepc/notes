# `less` and `more` commands

`less` and `more` command are used to **view the contents of a file in interactive mode**.

**Rule of Thumb**: **use `less` instead of `more`**. It does the same job but with _more feature_. (like scroll backward.)

**Syntax**:

```bash
less [option]... <target-file>
```

**Example**: Open `file.txt` to read in interactive mode.

```bash
less ~/file.txt
```

> [!NOTE]
> The commands take over the terminal window so you can interact with them to scroll through a file one line or one page at a time. You can press `q` to quit back to your shell prompt.

## Basic Navigation and Control

- `j`, `DOWN ARROW ⬇️` and `ENTER` — Scroll down one line.
- `k`, `UP ARROW ⬆️` — Scroll up one line.
- `SPACEBAR` — Scroll down one full page.
- `q` - Quit and exit back to the shell prompt.

---

## Related

- [Command Line Interface](./command-line-interface.md)
