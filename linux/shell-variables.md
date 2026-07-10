# Shell Variables

Shell (_bash_ and _zsh_) are powerful programming language, They have variables to store and reference data, along with other features like function, loop and more.

## There are 2 Types of Shell Variables

In a shell environment, variables are split into **2 types based** on their scope (who can access them).

1. **[Local Variables](./local-variables.md)**
2. **[Environment Variables](./environment-variables.md)**

## The Core Syntax Rules for Shell Variables

No matter what type of _shell variables_ you are using, the basic rules for creating and using them are exactly the same:

### No Spaces When Creating or Assigning Variables

When _create_ a new variable or _assign_ a new value to a variable in shell, you must write it with **no spaces** between the variable name, the assignment operator (`=`) and the value.

```bash
name="Amornthep"                              # Local
export department="Computer"                  # Environment
export PATH="$PATH:/path/to/target/directory" # PATH
```

> [!WARNING]
> If there are spaces, the shell will assume you trying to execute a command rather than assign a value to variable, which will cause a "command not found" error.

### Referencing the Value in Variables Requires the `$` Prefix

To _reference_ or _use_ the stored value inside a variable, You must prefix the variable name with the `$` symbol. This tells the shell to pull out the actual data inside the variable. Without `$`, the shell will treats variable names as literal text.

```bash
name="Amornthep"
echo $name # Output: Amornthep
echo name # Output: name
```

### The Quote Rule

You can write strings directly in a shell without quotes, Quotes are generally used to group the strings together in case there're spaces between words. Double Quotes (`""`) and Single Quotes (`''`) behave differently.

- Double Quotes (`"..."`): **Allows** variable referencing, The shell will look for `$` and put out the variable's value.
- Single Quotes (`'...'`): **Disable** variable referencing. The shell treats everything inside them as literal text.

```bash
echo "Hello $name" # Output: Hello Amornthep
echo 'Hello $name' # Output: Hello $name
```

> [!TIP]
> **Explicit Referencing**: You can make your variable references more explicit by wrapping the variable name in curly braces `${}`. This help when you need to put characters right after a variable name without any spaces, preventing the shell from getting confused about what is the variable name:

```bash
name="Bear"
echo "Hello ${name}z" # Output: Bearz
echo "Hello $namez"   # Output: <empty>, cause shell can't find that variable name.
```
