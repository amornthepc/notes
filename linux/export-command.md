# `export` command

`export` command is used to turn a [Local Variables](./local-variables.md) into an [Environment Variables](./environment-variables.md). — It marks the variables so its value is automatically passed down to any [_child process_](/linux/process.md#process-relationships-parent-vs-child) meaning it becomes _environment variables_ that any programs can access.

## 2 Ways to Use `export`

### 1. Exporting an Existing Variable

You can create a _local variable_ first (or if you already have one), you can `export` it by variable name (_Do not use_ the `$` prefix when exporting)

```bash
name="Amornthep"  # Start as a local variable
export name       # Now it is an environment variable
```

### 2. Creating and Exporting at the Same Time (Recommended)

You can create the variable, assign its value and export it all in a single line (_most common way_)

```bash
export NAME="Amornthep"
```
