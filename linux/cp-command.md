# `cp` (_Copy_) command

`cp` (_copy_) command is used to copy a file from one location to another. To copy a directory and all of its contents, you **must use the `-r` flag**.

```
cp <source-path> <destination-path>
```

**Copying Files**

```bash
# Copy a file into another directory.
cp source_file.txt destination/

# Duplicate a file with a new name in the same directory.
cp source_file.txt copy_file.txt
```

## Common Flags

### `-r`, `-R`, `--recursive`

```bash
# Copy a directory and everything inside it to the new location.
cp -R source_dir/ new_dir/
```

`-r` (_recursive_) flag is used to copy a directory — Because a directory can contain files and sub-directories nested over and over, so the command must go through all of them recursively to copy everything.
