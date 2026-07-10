# `head` and `tail` commands

Sometime we don't want to print everything in a file (the file might be too big), and we just want to look at some part of it.

## `head`

`head` command is used to prints the _first `n` lines_ of a file.

- `-n` flag is use to specify the number of line, If you do not use the `-n` flag it will default to `10`

```bash
# Print the first 5 line of file to the terminal (Top of the file)
head -n 5 file1.txt

# Print the first 10 line of file
head file1.txt
```

## `tail`

`tail` command is used to prints the _last `n` lines_ of a file.

- `-n` flag is use to specify the number of lines, If you do not use the `-n` flag it will default to `10`

```bash
# Print the last 5 line of file to the terminal (Bottom of the file)
tail -n 5 file1.txt

# Print the last 10 line of file
tail file1.txt
```
