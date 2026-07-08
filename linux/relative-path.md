# Relative Path

**Relative Path** is a path based on your current working directory—It is short and easier to read and write.

## Relative Path Example

```
root
 └── vehicles
      ├── cars
      │   ├── fords
      │   │   ├── mustang.txt
      │   │   └── focus.txt
```

When current working directory inside `vehicles` directory, the relative path to the `mustang.txt` file is:

```bash
cars/fords/mustang.txt
# or
./cars/fords/mustang.txt
```

When current working directory inside `cars` directory, the relative path to the `mustang.txt` file is:

```bash
fords/mustang.txt
# or
./fords/mustang.txt
```
