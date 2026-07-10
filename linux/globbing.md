# Globbing (Shell Wildcards)

**Globbing** is the pattern-matching system used directly by your terminal shell (like `bash` or `zsh`). It is used to quickly search for **filenames** or **file paths** when running command (like `ls`, `rm`, `cp` or `mv`)

> [!NOTE]
> **Globbing** is strictly used for matching _filenames_ in the _filesystem_, Unlike [Regular Expression](/linux/regular-expression.md) which search for text inside files.

**Most Common Characters Used for Globbing**

| Symbol | What it Does                                              | Example                                                                          |
| ------ | --------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `*`    | **Wildcard**: Matches anything (zero or more character)   | `rm *.txt` (Delete every file ending with `.txt`)                                |
| `?`    | Matches exactly **any single character** in that position | `cat log?.txt` (Matches `log1.txt`, `logA.txt` but not `log12.txt` or `log.txt`) |
| `[ ]`  | Matches **any one character** inside the brackets         | `ls image[123].png` (Matches `image1.png`, `image2.png`, `image3.png`)           |
| `[! ]` | Matches any one character **NOT** inside the brackets     | `ls log[123].txt` (Matches `logA.txt`, but skips any numbered like `log1.txt`)   |

| `` | |

---

> [!WARNING]
> Wildcard is differnt in this search pattern
>
> - In terminal shell (**Globbing**), `*` mean _wildcard_ or **anything**
> - In **Regex**, `.*` mean _wildcard_ or **anything**

## Related

- [`grep`](./grep-command.md)
- [Regular Expression](./regular-expression.md)
