# Git

## Check Git Version

```bash
git version
```

## Install Git

Command to get latest stable version of Git installed on fresh Ubuntu system:

```bash
sudo apt update
sudo apt install software-properties-common # enables add-apt-repository command
sudo add-apt-repository ppa:git-core/ppa
sudo apt update
sudo apt install git
```

## Git Configuration

Configure Git to contain your information. So, Whenever code changes, Git tracks who made the change. To ensure who get credit (or more likely blame)

Git come with a configuration both at _global_ and _repo_ (project) level. Most of the time will use the global config.

- for global/home level use `--global` options.
- for repo/project level use `--local` options.

Command to `get` Git current information `user.name` and `user.email`

**Syntax**

```bash
git config get [--<level>] <key>
```

**Example:**

```bash
git config get user.name # global
git config get user.email # global

git config get --global user.name
git config get --local user.name
```

Command to `set` Git information `user.name` and `user.email` (Recommended using your GitHub username and email.)

**Syntax**

```bash
git config set [--<level>] <key> <value>
```

**Example**

```bash
git config set --global user.name "amornthepc"
git config set --global user.email "amornthep.c@iusevimbtw.com"
```

Command to `set` default branch (depend on teams)

```bash
git config set --global init.defaultBranch main
```

Command to `unset` or remove a configuration value

```bash
git config unset [--all] [--<level>] <key>
```

```bash
git config unset user.name

git config unset --all example.key # in case of many same key have multiple value
```

All this Git configuration will stores in `~/.gitconfig` file, Check it:

```bash
cat ~/.gitconfig
```

Command to view contents of Git Configuration

```bash
git config list [--<level>]
```

```bash
git config list
git config list --local
```

## Branching

Command to show all branch, the branch that have `*` mean that's current working branch.

```bash
git branch
```

```bash
* main
feat/module01
feat/module02
feat/module03
```
