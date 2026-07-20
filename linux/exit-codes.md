# Exit Codes

**Exit Codes** (also called _"return codes_" or "_status codes_") are how programs communicate back whether they ran successfully or not.

> [!NOTE]
> Programs use **exit codes** to talk to each other. When one program call another program, it checks exit code to decide if it needs to log an error, continue with another process, or automatically re-run the job.

## Common Exit Codes

- `0` — **Success**. Everything worked perfectly.
- **Any other number** — **Error**. Something went wrong.
  - `1` — **"Catch-All" error**: General failure (something broke, but no specific code was set)
  - `2` — **Misuse of a command**: You pass incorrect argument or use incorrect syntax
  - `126` — **Permission denied**: The command cannot execute because you don't have access.
  - `127` — **Command not found**: You most likely mistyped the name of the command or not set `PATH` yet.

## Checking the Exit Code of the Last Program

You can access exit code of the very last program you ran by using the _question mark variable_ (`$?`)

**Success Example:**

```bash
cat hard-swallow-pill.txt
# There's no evidence that you're trying so fucking hard, if you not succeed.

echo $?
# 0 (Success)
```

**Error Example**

```bash
cat path/to/file/that/not/exist.txt
# No such  file or directory

echo $?
# 1 (Failed)
```

## Related

- [CLI](./command-line-interface.md)
- [Program](./program.md)
- [Shell](./shell.md)
