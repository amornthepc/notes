# Flags vs. Positional Arguments

## Flags (Options)

**Flags (Options)**: Mostly start with a dash (`-f`, `--flag`), Their position order doesn't always matter, and they used to change **how** command runs.

> [!NOTE]
> A few legacy command (like `tar`, `ps`) allow flags/options without a dash, but modern command always expect one.

## Positional Arguments

**Positional Arguments**: Do not start with a dash (`arg`), Their position order matters, and they are used as the **input data** for command to use in its job.

---

## Related

- [CLI](./command-line-interface.md)
- [Shell](./shell.md)
- [Flags](./flags.md)
- [Positional Arguments](./positional-arguments.md)
