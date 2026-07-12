# PATH

`PATH` variable is a built-in environment variable that stores **a list of directory paths** whose directories contain commands. — The shell will look into each directory in this list to find and run command instantly so you don't have to specify their full paths every time.

## Why Do We Need the `PATH` variable?

Without `PATH` variable (or if you don't add program's path into it), you would have to remember and type the full path of every single command you want to run.

**Example**: Without `PATH`

```bash
/usr/bin/ls
/usr/bin/python3 main.py
```

**Example**: With `PATH`

```bash
ls
python3 main.py
```

If the shell checks every directory in your `PATH` and find nothing, It will give you the error: `"command not found"`

## What's in the `PATH` Variable?

`PATH` variable actually stores a single long text string of full directory paths, where each path separated by colons (`:`)

You can see what is inside `PATH` by running `echo $PATH` or `env | grep "^PATH"`

```bash
/usr/local/bin:/usr/bin/:/bin:/usr/sbin:/sbin:/home/amornthep/.nvm/versions/node/v24.14.0/bin
```

This means your shell will look into all these directories for executable programs/command:

- `/usr/local/bin`
- `/usr/bin`
- `/bin`
- `/usr/sbin`
- `/sbin`
- `/home/amornthep/.nvm/versions/node/v24.14.0/bin`

## Adding New Directories to `PATH`

A common problem when installing new programs is getting a `command not found` error, right after try to use the program, Most of the time, this happens because the directory containing the program hasn't been added to [`PATH` variable](./path-variable.md).

> [!NOTE]
> Modern installers usually setup the path directory automatically, so you rarely have to add them manually.

### How to Add a New Directory Path

To add a new directory to your `PATH` without replacing or deleting the existing system paths, use the `export` command to assign the variable, `:` to append and separate paths, and `$` for reference the current value of the `$PATH` variable.

```bash
# Syntax: export PATH="$PATH:/path/to/new/directory"

export PATH="$PATH:~/workspace/bin"
```

- `export` — Assigns or updates the environment variable value.
- `$PATH` — References the current value (list of directories) of the `PATH` variable so you don't overwrite them.
- `:` — The separator character used to append the new directory path to the end of the existing list.

> [!WARNING]
> Running command directly in terminal will only changes your `PATH` **temporarily** for current terminal session, The moment you close and re-open the terminal, your new path is lost.

#### Making the New Path Permanent

To make new directory path that appended to the `PATH` variable stay forever, you must follow the steps to save it inside your shell configuration.

- See ➡️: [Make Environment Variables Persist](/linux/environment-variables-tips.md#making-environment-variables-persist)

---

## Related

- [Environment Variables](./environment-variables.md)
- [Tips: Environment Variables](./environment-variables-tips.md)
- [Built-in Environment Variables](/linux/environment-variables.md#built-in-environment-variables)
- [`PATH` variable](./path-variable.md)
- [Shell Configuration File](./shell-configuration-file.md)
- [`source` command](./source-command.md)
