# Filepath

**Filepath** is a string that represents the location of a file or directory in the filesystem.

- **The First Slash (`/`):** Only the first slash represents the _root directory_. Any other slashes inside path are just _separators_ used to split the directory names.
- **Name in the Path:** The names between slashes are directories, The final name at the end of path can be either a directory or a file.

## Path Breakdown Example

```bash
/home/amornthep
```

- **The first slash (`/`)**: Represents the root directory, The absolute top of the filesystem tree.
- **The next part (`home`):** Is the name of a directory located inside the root directory.
- **The final part (`amornthep`):** Is the name of a directory located inside the home directory

This path represents a directory structure of 2 levels deep:

```
root
 └── home
       └── amornthep
```
