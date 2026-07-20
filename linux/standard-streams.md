# Standard Streams

**Standard Streams** is the name for the **3 default standard input/output streams** that are automatically connected to _every single program when it starts running_.

A program will talk to these 3 default streams by using their [_file descriptor_](./file-descriptor.md) (number) to know _where default data flow_ and can use those numbers to **select and control** them.

## The 3 Standard Streams

| Stream Name                | Default File Descriptor | Default Target                | What it does                              |
| -------------------------- | ----------------------- | ----------------------------- | ----------------------------------------- |
| Standard Input (`stdin`)   | 0                       | Keyboard (Source)             | Pushes input data into the program        |
| Standard Output (`stdout`) | 1                       | Terminal Screen (Destination) | Pushes successful data out of the program |
| Standard Error (`stderr`)  | 2                       | Terminal Screen (Destination) | Pushes error messages out of the program  |

> [!NOTE]
> These streams aren't physical channel or pipe. They are just **logical pathways** separated entirely by its _file descriptor number_ (`0`, `1`, `2`) that the OS kernel use to decide where data flow.

## Related

- [File Descriptor](./file-descriptor.md)
- [Standard Output](./standard-output.md)
- [Standard Input](./standard-input.md)
- [Standard Error](./standard-error.md)
- [Data Stream](/cs-fundamentals/data-stream.md)
