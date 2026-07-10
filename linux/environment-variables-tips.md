# Practical Tips

## Making Environment Variables Persist:

You can make environment variables **persist and remain available** even after you close your terminal or open a new one.

1. Add the environment variables to your shell configuration files inside [_home directory_](./home-directory.md), The file name depend on which shell you are using.
   - For `bash`, use `~/.bashrc`
   - For `zsh`, use `~/.zshrc`

**Example**:

```.bashrc
export EDITOR=nvim
```

2. To apply the changes immediately without re-open your terminal, use the [`source` command](./source-command.md) to reload the configuration file:

```bash
source ~/.bashrc
```

> [!IMPORTANT]
> This work because the shell configuration file (`.bashrc`, `.zshrc`) is automatically executed every single time you open a new terminal window. This ensure environment variables and all configurations are ready for every new session.

## Quick Execute: Set a Environment Variable for Single Command

You can temporarily set an environment variable for a single command execution without exporting it to entire terminal session.

**Example**:

You pass the variable inline right before executing the command or script file.

```bash
WARN_MESSAGE="this works too!" bash ./script.sh
```

> [!WARNING]
> The `WARN_MESSAGE` variable will only exist inside the memory of that single `bash ./script.sh` process. After the script finishes running, the variable completely disappear from terminal.
