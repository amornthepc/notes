# Local Variables (Shell)

**Local Variable** is a temporary variable that only exists inside the exact terminal window or script file where it was declared.

> [!NOTE]
> By convention, the **Local Variable** uses `lower_snake_case` for variable name.

## Scope

It can only be accessed inside the [**Parent Process**](/linux/process.md#process-relationships-parent-vs-child) (current terminal session) or inside the specific script file where it was created.

**Out of Local Variable Scope**:

- **Child Process**: Any [**Child Process**](/linux/process.md#process-relationships-parent-vs-child) (like any programs, shell scripts, or servers) launched from this same terminal **cannot** access a local variable declared inside it.
- **Other Terminals**: The new terminal tab or window **cannot** access local variables declared in a different terminal window.

## Creating and Assigning a Local Variable

Use the assignment operator (`=`) with **no spaces** around it, Do not use `$` prefix when creating or assigning a variable.

```bash
name="Amornthep" # Create a variable.

name="Anonymous888" # Re-assign an existing variable.
```

## Referencing the Value of Variable

You must use the `$` prefix to pull out the data from variable:

```bash
name="Amornthep"
echo $name
# Output: Amornthep
```
