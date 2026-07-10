# `ls` (_List_) command

`ls` (_list_) command is used to list the contents of a directory — By default if no directory provided, it will list contents of the current working directory (`.`).

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

Includes hidden files and directories — those whose names start with a dot (`.`) such as `.bashrc`, `.env`
