# NVM (Node Version Manager)

**NVM** [(Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating) use to manage Node.js installation. NVM makes it easy to:

- Install multiple version of Node
- Update your Node version
- Keep your Node version configuration separate on each per-project

## Install NVM

[Go to NVM github repo](https://github.com/nvm-sh/nvm#installing-and-updating)
use one of the following command to install NVM

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
```

or

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
```

### Install Node.js with nvm (if necessary)

```bash
nvm install --lts
```

## Set Node.js Version for specific project using NVM

Different projects often require different Node.js version. Instead of manually switching versions everytime you change directories, you can configure NVM to automatically detect and use the correct Node.js version for each project using an `.nvmrc` file

## 1. Create Configuration File

Navigate to your project's root directory and create `.nvmrc` file containing the desired Node version number.

```bash
cd /path/to/your/project
echo "22.14.0" > .nvmrc
```

or

```bash
cd /path/to/your/project
nvim .nvmrc  -- nano .nvmrc or any editor u like.
```

then write version number like 22.14.0 then save file

```.nvmrc
22.14.0
```

> Replace `22.14.0` with the specific version your project needs.

## 2. Manual Usage

The first step (create `.nvmrc`) allows you to simply type

```bash
nvm use
```

in your CLI while in the root of your project to activate the correct version of node!

> Check to make sure you've activated the correct version of node by typing:

```bash
node --version
```

The version specified in `.nvmrc` file and from `node --version` command must match!.

If you don't have that version of node. NVM will tell command to run the installation.

```bash
Found '/home/amornthep/workspace/dojo/bootdotdev/learn-javascript/14-runtimes/01-nodejs/heifer/.nvmrc' with version <22.14.0>
N/A: version "v22.14.0" is not yet installed.

You need to run `nvm install` to install and use the node version specified in `.nvmrc`.
```

Then run to install the correct version

```bash
nvm install
```
