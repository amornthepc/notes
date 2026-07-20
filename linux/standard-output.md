# Standard Output

**Standard Output** (`stdout`) is **the moving data stream** of a program's **successful output**.

By default, Linux maps this stream (`stdout`) to [_file descriptor_](/linux/file-descriptor.md) `1`, which points to **terminal screen**. This why any _successful output_ of a program will print into the terminal screen. However, you can also redirect this stream into a file (write) or pipe it to another program.

```bash
echo "Fuck it, we ball!"
# Fuck it, we ball!
echo $?
# 0
```

> [!WARNING]
>
> **Standard Output** is the **moving [_data stream_](/cs-fundamentals/data-stream.md)** (_NOT static data saved on a disk_). It only exists while the program is running. When the program finishes, the stream is completely gone.

---

## Related

- [Shell](/linux/shell.md)
- [CLI](/linux/command-line-interface.md)
- [Data Stream](/cs-fundamentals/data-stream.md)
- [Terminal](/linux/terminal.md)
- [Standard Input](./standard-input.md)
- [Standard Error](/linux/standard-error.md)
- [Kernel](/cs-fundamentals/kernel.md)
