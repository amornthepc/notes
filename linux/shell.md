# Shell

**Shell** is command-line interpreter program running inside the terminal. It receives text commands from terminal (`stdin`) and its **main job is to evaluate them — usually by finding and running other programs on the system (like `ls`, `mkdir`, `git`, etc)** and send the output (`stdout`) back to terminal.

> **Shells** are best for running other programs and writing small scripts, _not for writing large application_.

> [!NOTE]
> Some commands are built-in directly to shell (called _shell-builtin_ like `cd`, `pwd`), For external program (like `git`, `node`) you must install it first.

## Common Type of Shells

They're **3 main types** shells you will encounter:

- `sh` (**The Bourne Shell**): The original Unix shell. It's very basic and doesn't have many quality-of-life features. — However, it's the _universal standard_ (POSIX-compilant), meaning it guaranteed to exist on almost every Unix-like machine.
- `bash` (**The Bourne Again Shell**): The default and most popular shell on Linux distributions, It's built directly on top of `sh` but adds a lot of extra features.
- `zsh` (**The Z shell**): The default shell on MacOS, Just like `bash`, it's built on top of `sh` but a lot of extra features.

> [!NOTE]
> Both `bash` and `zsh` are "**sh-compatible**", meaning they can read and execute standard shell script (`.sh`) file perfectly out-of-the-box.
