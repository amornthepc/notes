# `mkdir` (_Make Directory_) command

`mkdir` (_make directory_) command is used to **create a new directory** inside (or relative to) the current working directory — throwing an error if directory already exist.

```bash
mkdir new_dir
```

## Common Flags

### `p`, `--parents` (parent):

```bash
mkdir -p workspace/dojo/bootdotdev
```

`p` flag allows you to:

- _Create the directory without throwing an error if it already exists._
- Automatically create any missing parent directories along the given path.
