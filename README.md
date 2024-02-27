# Euripedes

A set of pandoc scripts to help formatting verse plays.

## Prerequisites

### Pandoc

`brew install pandoc`

### BasicTex and Thalie package

```bash
brew install --cask basictex
sudo tlmgr update --self
sudo tlmgr install thalie
```

## Running tests

### Install tools

```bash
mise use -g node        # or install via asdf, nvm etc
npm i
brew install jq         # or install via brew, apt, pacman etc
```

### Run test suite

```bash
npm run test
```
