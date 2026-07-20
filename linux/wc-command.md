# `wc` command

`wc` (_word count_) command is used to count the number of lines, words, and bytes (depend on the flags) in the specified file.

```bash
wc [OPTIONS]... [FILE]...
```

## The 3 Common Flags

Usually you will use the `wc` command with flag to tell command exactly what to count:

- `-l`, `--lines`: Counts the number of lines.
- `-w`, `--words`: Counts the number of words.
- `-c`, `--bytes`: Counts the raw size of the file in bytes.

## The Default `wc` command

By default, if you run `wc` command without any `flags` it will print _three numbers_ in order.

1. Number of Lines
2. Number of Words
3. Number of Bytes (File Size)

```bash
wc file_name.txt
# Output: 14 56 342 file_name.txt
#          │  │ │
#          │  │ │
#          │  │ └──────  Bytes (File Size)
#          │  └────────  Words
#          └───────────  Lines
```

---

## Related

- [CLI](./command-line-interface.md)
- [Flags](./flags.md)
