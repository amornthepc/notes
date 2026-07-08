# Executable File

**Executable File** is any file containing a program that you can run directly from terminal by specifying its file path.

```bash
./file_name
```

> [!IMPORTANT]
> The `./` prefix is mandatory if the executable files lives in current directory, Without it, the shell will assume you are trying to run a global system command (like `ls`, `mkdir`) instead of a local file.

In Unix-like system, there are **2 different types** of executable files:

## Binary Executables (Compiled Programs)

**Binary Executable File** is a file contains _[raw machine code](/cs-fundamentals/machine-code.md)_ generated ahead-of-time by an AOT compiler (like C, Go, etc)

> The Operating System (OS) can load and run it **directly on CPU**, without needing any other helper programs.

## Script Executables (Interpreted Program)

**Script Executables File** is a plain text file containing human-readable source code (like `.sh`, `.py`) that has been granted "**executable permission**" (`chmod +x`) by the system.

> The Operating System (OS) _can't it run directly on CPU_, It requires an interpreter program to translate and run the code.

There are 2 ways to run this script files.

### Explicit Way

**Explicit Way**: Manually call the interpreter program and pass the script file path as an argument.

```bash
bash script.sh
python3 script.py
```

### Shortcut Way (Shebang)

**Shortcut Way**: Add **Shebang** (`#!`) at the first line of script file. This explicitly and automatically tells the OS which interpreter to use behind the scenes.

```sh
#!/usr/bin/bash

# Your list of shell commands.
```

Once the file has executable permissions and a shebang, It can run by just specifying file path.

```bash
./script.sh
```
