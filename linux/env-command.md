# `env` command

`env` (_environment_) command is used to display all of the [environment variables](./environment-variables.md) currently set in your terminal session to standard output (`stdout`)

```bash
env
# Display all of the environment variables
```

## Practical Tip: Finding a Specific Variable

Because `env` prints out long ass text, you can use pipe (`|`) to send standard output into the `grep` command to quickly search for a specific variable.

```bash
env | grep USER
# Output: USER=amornthep
```
