# Environment Variables

**Environment Variable** is a temporary global variable that is available to _all programs_ ([child process](/linux/process.md#process-relationships-parent-vs-child)) that you run from your current terminal session.

## Built-in Environment Variables

**Built-in Environment Variables** are predefined variables that are automatically set up by your operating system and load fresh in every single terminal session. — This means they are instantly ready for you or your programs to use (like finding who you are, what shell program you are using, or where are paths to your commands).

## Creating and Assigning Environment Variables

To create an environment variable for your current terminal session, use the [`export` command](./export-command.md), follow by variable declaration with **no spaces**. — These **environment variables** will not persist if you close the terminal or open the new one.

```bash
export NAME="Amornthep"
```

Once environment variable is created, all programs and scripts executed from this terminal can access that variable.

> [!NOTE]
> By convention, the **Environment Variable** uses `UPPER_SNAKE_CASE` for their names.

**Example**:

If you export an environment variable in terminal:

```bash
export NAME="Amornthep"
```

And you have a script called `introduce.sh` with following content:

```bash
#!/usr/bin/sh

echo "Hi I'm $NAME"
```

Running this script will inherit and use the `NAME` environment variable:

```bash
./introduce.sh

# Hi I'm Amornthep
```

---

## Related

- [Practical Tips for Environment Variables](/linux/environment-variables-tips.md)
- [Common Built-in Environment](common-built-in-environment-variables.md)
- [PATH variable](/linux/path-variable.md)
