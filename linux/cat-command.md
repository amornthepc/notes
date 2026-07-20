# `cat` (_Concatenate_) command

`cat` (_concatenate_) command is used to **view the contents of a file by print them to [_`stdout`_](./standard-output.md)** (terminal screen). If _no file specified_, `cat` expect to **read input from [`stdin`](./standard-input.md)** (keyboard).

**Syntax**:

```bash
# Most common use case.
# Read input from files (arguments), and print them to the terminal
cat [option]... <target-file>...

# Read input from keyboard (stdin).
cat [option]...

# Read input from keyboard (stdin), after finishing write input to a specified file.
cat [option]... > <target-file>
```

> [!NOTE]
> Actually, `cat` concatenates multiple files together and print them to the terminal.

**Example**: `cat` read input from files (arguments)

```bash
# Print the contents of a file to the terminal
cat file1.txt

# Concatenate the contents of multiple files and print them to the terminal
cat file1.txt file2.txt
```

**Example**: `cat` read input from keyboard (`stdin`) and then write into a new file.

```bash
cat > new_file.txt
# System wait for user to type their input data from keyboard
"Here Is My Input"
"DONE"
# When user is finished, press <Ctrl + d> on keyboard to tell that we are DONE.
# System create a new file named "new_file.txt" in cwd with the content typed above.
```

## Related

- [`stdout`](./standard-output.md)
- [`stdin`](./standard-input.md)
- [Positional Argument](./positional-arguments.md)
- [Terminal Shortcut](./terminal-shortcut.md)
