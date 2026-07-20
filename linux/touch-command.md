# `touch` command

`touch` command is mostly used to **create new empty files** at a target filepath. _But only if that file does not already exist_ — otherwise it update the existing file's access and modification timestamps.

**Syntax**:

```bash
touch [option]... <target-file>
```

**Examples**

Creating a single file:

```bash
touch ~/workspace/anonymous_app/new_file.js
```

Creating multiple files at once by listing them:

```bash
touch script.js index.html style.css
```

> [!NOTE]
> Technically, this command is meant to update a file's access and modification timestamps, Creating a new empty file is just its side effect when the file isn't there yet.

---

## Related

- [Command Line](./command-line-interface.md)
- [filepath](./filepath.md)
