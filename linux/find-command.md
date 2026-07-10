# `find` (_Find_) command

`find` command is mostly used to search for files and directories by name from a specific directory, not by their text contents. — **It will do a recursive search automatically** down through all sub-directories.

```
find <target-directory> -name "<search-name>"
```

> [!NOTE]
> **Actually**: `find` searches based on file _metadata_ (attributes like name, type, size, etc), which allows it to support many advanced search features.

## Find a File or Directory by Name

```
find <target-directory> [-type f|d] -name "<search-name>"
```

By default, if you don't specify the `-type` option, `find` will search for **both** files and directories that match the name.

```bash
find some_directory -name cool_name
```

Search for both file and directory named `cool_name` inside `some_directory` directory.

### Find a File by Name

To search only regular files, use `-type f` flag

```bash
# Search for a file named "some_file.txt" inside "some_directory"
find some_directory -type f -name "some_file.txt"
```

### Find a Directory by Name

To search only for directories, use the `-type d` flag

```bash
# Search for a directory named "target_dir" inside "some_directory" directory
# Note: Do not add a trailing slash "/" inside the -name quotes! (it will include as part of directory name)

find some_directory -type d -name "target_dir"
```

## Pattern Search

`find` command can use wildcard matching to search for files or directories.

- `*` — matches zero or more of any character (e.g. `*.txt`)
- `?` — matches exactly one character (e.g. `file?.txt`)

### Pattern Search Example

Find all files name that end with `.txt` in `some_directory` directory:

```bash
find some_directory -name "*.txt"
```

Find all files or directories name that contain word `chad` in `some_directory` directory:

```bash
find some_directory -name "*chad*"
```
