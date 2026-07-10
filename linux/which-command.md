# `which` command

`which` command is used to display _the location_ (full path) of an installed command line program.

```bash
which sh
# Output: /bin/sh or /usr/bin/sh
```

The example ask for the location of the `sh` (shell) program. On most machine it lives at `/bin/sh` or `/usr/bin/sh`

## Practical Use Case: Checking Software Versions

When you have multiple versions of a tool installed (like different version of `.NET`, `Node.Js`), `which` can tells you exactly which one your terminal currently use right now.

```bash
which node
# Outpt: /home/amornthep/.nvm/versions/node/v24.14.0/bin/node
```
