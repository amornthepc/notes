# tmux (Terminal Multiplexer)

`tmux` used for managing multiple terminal sessions from a single window.

## The Core Prefix

All session commands require the prefix first (like <leader>) by default is: `Ctrl + b`

## Session Management

### Start a new named session

```bash
tmux new -s <session-name>
```

- `-s` stand for \*session

### Detach from current session (still running in the background)

If you already in `tmux`: `Ctrl + b` then press `d`

### List all active sessions

```bash
tmux ls
```

### Re-attach to session

```bash
tmux a -t <session-name>
```

- `a` is for attach
- `-t` is for target which will follow by target (session name)

### Switch Session (Interactive)

Assume you're on tmux, press `Ctrl + b` then `s`, It prompt interactive you can use arrow to select the session.

### Switch Session

- `Ctrl + b` then `)`: switch to the _next_ session
- `Ctrl + b` then `(`: switch to the _previous_ session
- `Ctrl + b` then `Shift + l`: switch back and forth like toggle.

## Managing "Tabs" (Windows)

If you want multiple screen inside the same session (like browser tabs)

- Create a new tab: `Ctrl + b` then `c`
- **Switch to the next tab**: `Ctrl + b` then `n`
- **Switch to the previous tab**: `Ctrl + b` then `p`
- **Switch using numbers**: `Ctrl + b` then number (`0`, `1`)

## Splitting Screen (Panes)

If you want to see two things side-by-side on same session.

- **Split screen horizontally**: `Ctrl + b` then `"`
- **Split screen vertically**: `Ctrl + b` then `%`
- **Switch between splits**: `Ctrl + b` then Arrow keys (up/down/left/right)
- **Close a split**: type `exit` then press enter
