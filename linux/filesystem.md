# Filesystem

**Filesystem** is the system that stores and organizes all the data on a computer into files and directories, structuring them like an upside-down tree (because the root sits at the top and the branches grow downward).

The **filesystem** tree start with a single directory at the very top called the _[root directory](./root-directory.md)_. This directory contains files and directories, which can contain more files and directories and so on indefinitely.

```mermaid
graph TD

  %% Level 0: Root Directory
  root_dir[("📁 root dir")]

  %% Level 1: Children of Root
  root_dir --- dir1[("📁 dir")]
  root_dir --- dir2[("📁 dir")]
  root_dir --- file1["📄 file"]
  root_dir --- dir3[("📁 dir")]
  root_dir --- file2["📄 file"]

  %% Level 2: Children of Dir1
  dir1 --- dir4[("📁 dir")]
  dir1 --- dir5[("📁 dir")]

  %% Level 2: Children of Dir2
  dir2 --- dir6[("📁 dir")]
  dir2 --- file3["📄 file"]

  %% Level 2: Children of Dir3
  dir3 --- file4["📄 file"]
  dir3 --- file5["📄 file"]
  dir3 --- dir7[("📁 dir")]


  %% Level 3: Children of Dir4
  dir4 --- file6["📄 file"]
  dir4 --- file7["📄 file"]

  %% Level 3: Children of Dir5
  dir5 --- file8["📄 file"]


  %% Level 3: Children of Dir6
  dir6 --- file9["📄 file"]
  dir6 --- file10["📄 file"]


  %% Level 3: Children of Dir7
  dir7 --- file11["📄 file"]
```
