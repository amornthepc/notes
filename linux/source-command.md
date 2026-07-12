# `source` command

`source` command is used to **reload and apply settings from a file** directly into your current terminal session instantly, — so you don't have to close and re-open terminal when update a configuration file.

## Practical Use Case

When you update or add a new shortcut (alias) or new environment variable to your shell configuration file (`~/.bashrc` or `~/.zshrc`), the current terminal doesn't know about it yet — If you want to use whatever was update immediately, you need to either re-open terminal or running `source` command.

```bash
# Apply changes to bash instantly
source ~/.bashrc

# Shortcut tip?: A single dot (.) does the same thing
. ~/.bashrc
```

---

## Related

- [Shell Configuration File](./shell-configuration-file.md)
- [Environment Variables](./environment-variables.md)
