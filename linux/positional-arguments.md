# Positional Arguments

**Positional Argument** is static input data passed into a command (program) in a specific position, so their order matters, depending on how the command is designed. (e.g. _file path_, _literal string_)

```bash
command [OPTIONS] [ARGUMENT_1] [ARGUMENT_2]
```

## One Argument

`cd` command takes only **one** positional argument: the directory you want to move into.

```bash
cd /home/workspace
```

## Multiple Arguments

`mv` command takes **two** positional arguments. The order matters because first argument is for source and second argument is for destination.

```bash
mv cowboyshit.txt scripts/cowboyshit.sh
```

---

## Related

- [CLI](./command-line-interface.md)
- [Flags](./flags.md)
- [`cd` command](./cd-command.md)
- [`mv` command](./mv-command.md)
