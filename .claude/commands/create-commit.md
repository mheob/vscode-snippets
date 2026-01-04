---
allowed-tools: Bash(cat*), Bash(git add:*), Bash(git commit:*), Bash(git log:*), Bash(git status:*), Bash(bun run changeset:*)
description: Create a git commit
---

## Context

- Current git status: !`git status`
- Current git diff (staged and unstaged changes): !`git diff HEAD`
- Current branch: !`git branch --show-current`
- Recent commits: !`git log --oneline -10`
- Don't use the `--no-verify` flag

## Your tasks

Create a single git commit based on the above changes.

Use conventional commits with a title length of max 50 characters. See @commitlint.config.js for more details. Include a useful
commit body.

Please omit mention Claude as author and generator.
