# Standard Input

**Standard Input** (`stdin`) is **the moving [data stream](/cs-fundamentals/data-stream.md)** that _flow_ **input data** into a program.

By default, Linux maps this stream (`stdin`) to [_file descriptor_](./file-descriptor.md) `0`, which points to **keyboard**, This mean the program have to waits for user keystrokes to get its data. However, you can use redirection or pipes to route data from a file's content (static data) or another program's `stdout` (data stream) into `stdin` for the program to use.

```bash
# When a program runs without redirection, it reads data stream from fd 0 (keyboard)
./program
Enter your name: <waiting-for-user-keystroke>
```

---

## Related

- [Shell](/linux/shell.md)
- [CLI](/linux/command-line-interface.md)
- [Data Stream](/cs-fundamentals/data-stream.md)
- [Terminal](/linux/terminal.md)
- [Standard Output](./standard-output.md)
- [Standard Error](/linux/standard-error.md)
- [Kernel](/cs-fundamentals/kernel.md)
