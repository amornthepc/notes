# Shebang `#!`

**Shebang** is a special line place at the first line of a script file. It tells the _operating system_ which interpreter program to use to execute the script when you run it as a shortcut executable (e.g. `./script.sh`)

> [!NOTE]
> Shebang only required for script executables (interpreted program). Binary executables (raw machine code) run natively out-of-the-box.

**The format of shebang:**

```
#!<path-to-interpreter> [optional-arguments]
```

**Example**

If you have Python script and want to use Python 3 to run it, _shebang_ in your script look like this:

```python
#!/usr/bin/python3
```

This explicitly tells the system to use the Python 3 interpreter located at `/usr/bin/python3` path to run the script behind the scences.

## Requirements for Shebang to work

1. **Line 1 Placement**: The **shebang** must be on the _first line_ of file with zero blank lines or spaces before it.
2. **Executable Program**: The script file must be granted _executable permission_ in the terminal using `chmod` command.

```bash
chmod +x file_name.py
```
