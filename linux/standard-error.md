# Standard Error

**Standard Error** (`stderr`) is **the moving data stream** of a program's **error output**.

By default, Linux maps this stream (`stderr`) to [_file descriptor_](/linux/file-descriptor.md) `2`, which points to the **terminal screen**. This why _error messages_ of a program will print right alongside normal output in the terminal screen. However, you can also redirect this stream into a file (write) or pipe it to another program.

```bash
cat path/to/file/not/exist
# No such file or directory
echo $?
# 1
```

> [!WARNING]
> **Standard Error** is a **moving [_data stream_](/cs-fundamentals/data-stream.md)** (_NOT static data saved on a disk_). It only exists while the program is running. When the program finishes, the stream is completely gone.

---

## Related

- [Shell](/linux/shell.md)
- [CLI](/linux/command-line-interface.md)
- [Data Stream](/cs-fundamentals/data-stream.md)
- [Terminal](/linux/terminal.md)
- [Standard Output](/linux/standard-output.md)
