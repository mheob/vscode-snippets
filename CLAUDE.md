# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**vscode-snippets** is a VS Code extension that provides code snippets for modern web development with Next.js and React in
TypeScript. Published by "mheob" as a VS Code extension.

## Build & Development Commands

```bash
pnpm install      # Install dependencies
pnpm build        # Generate snippet files from src/ to snippets/
pnpm lint         # Run ESLint
```

## Project Architecture

### Directory Structure

- **src/**: Source snippet definitions organized by language
  - `javascript/` - JS-only snippets (console, exports, functions)
  - `javascriptreact/` - JSX snippets (components, hooks)
  - `typescript/` - TS-only snippets (imports)
  - `typescriptreact/` - TSX snippets (components, Next.js)
  - `markdown/` - Markdown snippets
- **snippets/**: Generated output files (do not edit directly)
- **scripts/**: Build scripts that merge source files into final snippets

### Build Process

The `generate-snippet-files.ts` script:

1. Reads JSON files from `src/` subdirectories
2. Merges snippets hierarchically (JS → JSReact, JS+TS → TSReact)
3. Outputs 5 final JSON files to `snippets/`

### Snippet File Format

Each snippet in `src/` follows VS Code snippet format:

```json
{
	"Snippet Name": {
		"prefix": "shortcut",
		"body": ["line1", "line2"],
		"description": "What it does"
	}
}
```

## Key Files

- `package.json` - VS Code extension manifest with `contributes.snippets`
- `scripts/generate-snippet-files.ts` - Main build script
- `scripts/utils.ts` - File I/O and merging utilities
