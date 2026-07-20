# Kernel

**Kernel** is the core engine of an [**Operating System (OS)**](./operating-system.md) — It is the **only software** that has full access to the physical hardware.

> Think of **Kernel** as the _bridge_ between your running software and the physical machine (CPU, RAM, SSD).

## Core Responsibility

- **Process Management**: Decide which program gets to run, when, and for how long. (_act as the traffic cop for CPU_)
- **Memory Management**: Keeps track of RAM, allocating safe, isolated memory spaces for apps so they don't overwrite or steal data from each other.
- **Device Management**: Uses _drivers_ to talk directly to physical hardware components (keyboard, monitor, graphics cards)
- **System Calls**: Provides a safe way for normal apps to request hardware access (e.g. Chrome asking Kernel to save a download file to hard disk)

> [!NOTE]
> **Kernel** is **NOT the whole OS**. It is just the invisible, low-level engine inside it, it has no graphical interface, no windows, and no button.

---

## Related

- [Operating System](./operating-system.md)
