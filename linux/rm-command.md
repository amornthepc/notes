# `rm` (_Remove_) command

`rm` (_remove_) command is used to deletes a file, To delete a directory **must use the `-r` flag**

```bash
# Delete a file
rm file_name.txt
```

## Common Flags

### `-r`, `-R`, `--recursive`

```bash
# Delete a directory
rm -r just_directory/
```

`-r` (_recursive_) flag means delete a directory and all of its contents recursively.

> [!NOTE]
> _"Recursively"_ mean the command will go down into every sub-directory, repeating the delete process until all files and nested directories inside are completely gone.
