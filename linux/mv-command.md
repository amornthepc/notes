# `mv` (Move) command

`mv` (_move_) command is used to **moves a file or directory from one location to another** — You can also use it to **rename file or directory**, or **rename it while moving its location** all in one command.

**Syntax**:

```bash
mv <source-path> <destination-path>
```

## Moving A File

Moving a file from the current directory to another nested directory:

```bash
mv some_file.txt some_directory/some_file.txt
```

Moving a file from current working directory, to the parent directory:

```bash
mv some_file.txt ../some_file.txt
```

> [!TIP]
> If you don't want to rename the file and _just want to move it to different location_, you can **omit** the file name
>
> ```bash
> mv some_file.txt some_directory/
> ```

## Rename A File

```
mv <current-name> <new-name>
# or
mv <target-file/dir-path> <path-to-new-location-and-new-name>
```

Renaming a file in the current working directory:

```bash
mv some_file.txt new_file_name.txt
```

Moving a file and renaming it the same time:

```bash
mv some_file.txt some_directory/new_file_name.txt
```
