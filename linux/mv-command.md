# `mv` (_Move_) command

`mv` (_move_) command is used to **moves a file or directory from one location to another** — You can also use it to **rename file/directory**, or rename it while moving its location all in one command.

## Moving A File

```
mv <path-to-target-file/directory> <path-to-new-location>
```

Moving a file from the current directory to another nested directory:

```bash
mv some_file.txt some_directory/some_file.txt
```

Moving a file from current working directory, to the parent directory:

```bash
mv some_file.txt ../some_file.txt
```

If you don't want to rename the file and just want to move it to different location, you can _omit_ the file name:

```bash
mv some_file.txt some_directory/
```

## Rename A File

```
mv <current-name> <new-name>
# or
mv <path-to-target-file/directory> <path-to-new-location-and-new-name>
```

Renaming a file in the current working directory:

```bash
mv some_file.txt new_file_name.txt
```

Moving a file and renaming it the same time:

```bash
mv some_file.txt some_directory/new_file_name.txt
```
