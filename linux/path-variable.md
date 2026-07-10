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

---

## Related

- [Environment Variables](./environment-variables.md)
- [Built-in Environment Variables](/linux/environment-variables.md#built-in-environment-variables)
