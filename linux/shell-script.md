# Shell Script

**Shell Scripts (`.sh` files)** is a text file that contain a list of _shell commands_.

> [!NOTE]
> shell script is just a source code that is easy to read and write for human, However it's _**interpreted program**_ and can't run by itself;

**Shell Script** must use the _shell program_ to run and there are 2 ways to run it.

- **Explicit Way**: `bash script.sh` — Manually call the shell program and pass it the shell script.
- **Shortcut Way**: `./script.sh` — The system look at the top of the file for interpreter path via the _shebang_ (`#!`) and calls the interpreter the script automatically.
