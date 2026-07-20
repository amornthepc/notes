# Data Stream

**Data Stream** (or _stream of data_) is a continuous flow of data (like plain text strings) sent out piece-by-piece over time.

Instead of waiting until the very end to dump a massive block of text all at once, a program sends out data bit-by-bit and line-by-line continuously.

**Example**:

- _File_: Streams data out (when reading) or in (when writing)
- _Keyboard_: Streams text data (input) into a program.
- _Terminal Screen_: Streams text data (program's output) onto your screen.
- _Pipe_: Streams output data from one program directly into another program.
- _Network Connection_: Streams data being sent or receive over a network.

> [!NOTE]
> Think of **data stream** as _water flowing through a pipe_.
>
> - **It flows**: the text moves in real time from a source (program) to a destination (terminal screen) — appearing line-by-line as it happen in running program, instead of waiting until the program finishes to dump everything at once.
> - **It can be redirect**: Just like adding new pipe, you can intercept the flow and redirect it into a text file or into another command as input

## Related

- [CLI](/linux/command-line-interface.md)
- [Standard Output](/linux/standard-output.md)
