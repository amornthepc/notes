# `ln` command

`ln` (_link_) command is used to creates a link (_special file_) that points to another file or directory.

**Syntax**:

```bash
ln <target-path> <link-path>
```

> [!NOTE]
> `ln` command creates [_hard link_](./hard-link.md) by default, which rarely used. 99% of the time we will use [_symbolic link_](./symbolic-link.md)

## Create a Symbolic Link

To create a [_symbolic link_](./symbolic-link.md), use the `-s` flag.

**Syntax**:

```bash
ln -s <target-file/dir-path> <symlink-path>
```

Notice: **The path to the target come first**, then followed by the path where symlink will be created.

### Target Path and Symlink Behavior

**Symbolic Link** simply stores **"string of the target path"**, and there are two different ways to write this path either a absolute path or a relative path, and both options have trade-off!

#### **1. Absolute Path**

```bash
ln -s /home/username/dotfiles/config/nvim /home/username/.config/nvim
```

- **Link Stores**: The literal string of absolute full path: `/home/username/dotfiles/config/nvim`
- **The Trade-Off**: We can move _symlink_ `~/.config/nvim` to anywhere on filesystem, and it will still work because the link know the exact, absolute path to the target

---

**Example**:

```bash
# You are currently at /home/username
ln -s ./documents/important.txt important.txt
```

This creates a _symlink_ in the current working directory named `important.txt`, which point to `documents/important.txt` and this relative target path based on the _symlink_'s location (not from wherever we run `ls` command)

- It mean when we interact with `important.txt`, the OS look at `documents/` directory relative to `important.txt` link location

This creates a _symlink_ in the current working directory named `important.txt`, which points to path `documents/important.txt`
