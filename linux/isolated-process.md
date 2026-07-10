# Isolated Process

**Isolated Process** is a running program locked inside its own **private boundary** by the _operating system_.

- **The Rule**: _What happens inside the process stays inside the process_. — If the program crashes, the rest of the system keep running smoothly (not crash with it).
- **The Restriction**: It cannot _directly_ touch, see, or mess with the memory of data of any other program.

> If **Isolated Process** needs to do anythong outside its boundary (like access a file or create a child process), It can't do it directly. It must ask the **Operating System Kernel** to handle it safely.
