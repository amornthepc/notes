# Positional Argument vs. Standard Input

Both are input data for a program to use in during its running process, but they operate completely differently under the hood.

**Positional Argument** is _the static input data_ placed in specific position after the command based on its design, so the command must figure out how to handle this data (e.g find a path location, opening the file, reading the data inside)

```bash
grep "command" /tmp/file.md
```

- `/tmp/file.md` is the static file path, that `grep` command must explicitly look for, open and extract the data inside this specified file by itself.

**Standard Input** is _the moving data stream_ that is automatically opened and flowed into the program by the Shell. It's input stream not command argument, so the command does not have to find or open anything. It just reads the data streams

```bash
ls | grep "command"
```

- `stdout` from `ls` is the moving data stream (`stdin`) that flows automatically into the `grep` command. — `grep` command does not know any files on the disk; it just reads the incoming streams.

---

## Related

- [Standard Input](./standard-input.md)
- [Positional Argument](./positional-arguments.md)
- [Data Stream](/cs-fundamentals/data-stream.md)
