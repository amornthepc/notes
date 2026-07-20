# File Descriptor

**File Descriptor** (`fd`) is **zero or positive integer** (_number label_) that Linux uses to **track an active input/output [data stream](/cs-fundamentals/data-stream.md)**.

The OS Kernel uses the **file descriptor number** to map the _stream_ to its _default data source or destination_, and you can use that number to **select and control** how data flows.

> [!NOTE]
> Under the hood, Linux treats **almost everything** as a file, which means **Linux track all active I/O streams with a file descriptor (_number_)**. Instead of dealing with complex hardware, programs simply **passes** the _data_ and the _number label_ to the OS Kernel, and the Kernel handles **reading or writing the data**.

## The 3 Default File Descriptor Numbers

- `0`: [Standard Input](./standard-input.md) (`stdin`) — Active Input Stream (keyboard)
- `1`: [Standard Output](./standard-output.md) (`stdout`) — Active Successful Output Stream (terminal screen)
- `2`: [Standard Error](./standard-error.md) (`stderr`) — Active Error Output Stream (terminal screen)

## The File Descriptor Table

The OS [Kernel](/cs-fundamentals/kernel.md) creates a unique **File Descriptor Table** for _every single program when it runs_.

- The table is completely deleted when the program closes.
- The Kernel uses this table as a lookup sheet to map the _number label_ to the actual _data source or destination_.
- Every program gets its own FD table, so different programs can use the exact same number for completely different sources or destination, For example Program A might use `3` for a network connection, while Program B uses `3` for saved file. (By default `0`, `1`, and `2` labels always map to standard defaults).

| File Descriptor | Data Source / Destination                                                  |
| --------------- | -------------------------------------------------------------------------- |
| `0`             | Keyobard (Source)                                                          |
| `1`             | Terminal Screen (Destinaion)                                               |
| `2`             | Terminal Screen (Destination)                                              |
| `3`+            | Dynamically maybe files, network connections, etc. (Source or Destination) |

## Why Use Numbers Instead of Names?

- **Speed**: Computers process simple integers faster than long text strings or full file paths.
- **Easy Redirection**: To redirect output or change where data goes. Linux just unhooks the number tag (like `1`) from your screen and points it to a target file instead. The program code doesn't need to change at all.

---

## Related

- [Standard Streams](./standard-streams.md)
- [Standard Output](./standard-output.md)
- [Standard Input](./standard-input.md)
- [Standard Error](./standard-error.md)
- [Data Stream](/cs-fundamentals/data-stream.md)
