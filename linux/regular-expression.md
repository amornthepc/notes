# Regular Expression

**The Most Common Characters used to build Search Patterns**:

| Symbol | What it Does                                                        | Example                                                                                                                             |
| ------ | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `^`    | Matches the line **begins with** the specified text                 | `grep "^PATH"` (Finds lines where PATH is the first thing on the line)                                                              |
| `$`    | Matches the line **ends with** the specified text                   | `grep "sh$"` (Finds lines where sh are the last characters on the line)                                                             |
| `\`    | **Escapes a character** to turn a special symbol into _plain text_  | `grep "\/"` (Search for a slash `/` character)                                                                                      |
| `.`    | Matches **any single character** in that position                   | `grep "b.sh"` (Matches `bash`, `bish`, `bush`, etc)                                                                                 |
| `.*`   | Matches **anything zero or more characters** (**Wildcard Pattern**) | `grep "start.*end"` (Matches lines that begin with `start` and end with `later` the middle can be whatever it is or nothing at all) |
| `[ ]`  | Matches **any one character** inside the brackets                   | `grep "f[aeiou]ck"` (Matches `fack`, `feck`, `fick`, `fock`, `fuck`)                                                                |
| `[^ ]` | Matches anything **NOT** inside the brackets                        | `grep "[^0-9]"` (Finds lines with non-number characters)                                                                            |

> [!WARNING]
> In Regex, `.*` is the **Wild Card** pattern, Unlike other most pattern that use `*`
