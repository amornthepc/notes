# `expr` (_Expression_) command

`expr` (expression) command used to evaluate a given expression and print the result directly to terminal (`stdout`).

- You must leave spaces between the _numbers_ and _operators_
- Some operators it _require_ to prefix with escape character `\` to use it.
- Comparison will return `1` if true, `0` if false.

```bash
amornthepc:~$ expr 420 - 69
351
amornthepc:~$ expr 5 \* 4
20
amornthepc:~$ expr 10 \> 5
1
```
