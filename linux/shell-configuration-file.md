# Shell Configuration File

**Shell Configuration** is a hidden script file located in [home directory (`~`)](./home-directory.md) that runs automatically **every single time you open a new terminal window**.

> [!IMPORTANT]
> **Shell Configuration** main purpose is to set up terminal environment so it is ready to work immediately.

## Practical Use for Shell Configuration File

**1. Create Permanent [Environment Variables](./environment-variables.md)**

```.bashrc
export EDITOR=nvim
export GEMINI_API_KEY="YourSecretKey"
```

**2. Adding New Directories to Your [`PATH` Variable](./path-variable.md)**

```.bashrc
export PATH="$PATH:~/new/path/to/target/dir"
```

**3. Setting Up Custom Command Shortcuts (Aliases) and Functions**

```.bashrc
alias ls="lsd"
alias xcopy="xclip -selection clipboard"

# make a directory and immediately change into it.
mkcd() {
  mkdir -p "$1" && cd "$1"
}
```

> [!TIP]
> Shell Configuration Files only run when new terminal opens, if you want to apply changes that you make to your _current_ open terminal immediately, you **must** run `source command`: `source ~/.bashrc`

## Common Shell Configuration File Name

The file name depends on which terminal shell you are running:

- **For** `bash`: `~/.bashrc`
- **For** `zsh`: `~/.zshrc`

---

## Related

- [Shell](./shell.md)
- [Environment Variables](./environment-variables.md)
- [PATH](./path-variable.md)
- [`source` command](./source-command.md)
