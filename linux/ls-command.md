# `ls` (_List_) command

`ls` (_list_) command is used to **list the contents of a directory** to [`stdout`](./standard-output.md) — If no directory specified, it **defaults** to the _[current working directory (`.`)](./current-working-directory.md)_.

**Syntax**:

```bash
ls [option]... [dir]...
```

**Example**:

```bash
ls
# Desktop/ Documents/ Pictures/ Videos/ Downloads/

ls Downloads/
# Courses/ MyFolder/ image-file.png video-file.mp4 zip-file.unzip
```

## Common Flags

### `-l` (long format):

```bash
ls -l
```

Displays the output in a detailed list, showing its permissions, owner, size, and the last modified date/time.

### `-a`, `--all` (all):

```bash
ls -a
```

List all contents of a directory includes hidden files and directories — those whose names start with a dot (`.`) such as `.bashrc`, `.env`

## Related

- [Flags](./flags.md)
