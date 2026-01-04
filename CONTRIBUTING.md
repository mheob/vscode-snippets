# Contributing to vscode-snippets

Thank you for your interest in contributing! This guide will help you get started.

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v24 or higher
- [pnpm](https://pnpm.io/) package manager

### Getting Started

1. Fork and clone the repository
2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Build the snippets:

   ```bash
   pnpm build
   ```

## Project Structure

```txt
src/                    # Source snippet definitions (edit these)
├── javascript/         # JS-only snippets
├── javascriptreact/    # JSX snippets
├── typescript/         # TS-only snippets
├── typescriptreact/    # TSX snippets
└── markdown/           # Markdown snippets

snippets/               # Generated output (do not edit directly)
scripts/                # Build scripts
```

## Adding or Modifying Snippets

### Where to Add Snippets

- **JavaScript snippets** (`src/javascript/`): Available in `.js`, `.jsx`, `.ts`, `.tsx`
- **JavaScript React snippets** (`src/javascriptreact/`): Available in `.jsx`, `.tsx`
- **TypeScript snippets** (`src/typescript/`): Available in `.ts`, `.tsx`
- **TypeScript React snippets** (`src/typescriptreact/`): Available in `.tsx` only
- **Markdown snippets** (`src/markdown/`): Available in `.md`

### Snippet Format

Each snippet follows the [VS Code snippet format](https://code.visualstudio.com/docs/editor/userdefinedsnippets):

```json
{
	"Snippet Name": {
		"prefix": "triggerKeyword",
		"body": ["line1", "line2", "$0"],
		"description": "Brief description of what this snippet does"
	}
}
```

- Use `$1`, `$2`, etc. for tab stops
- Use `$0` for the final cursor position
- Use `${1:placeholder}` for tab stops with default values

### Building After Changes

After modifying snippets in `src/`, regenerate the output files:

```bash
pnpm build
```

This merges snippets hierarchically and outputs to `snippets/`.

## Code Quality

Before submitting, ensure your code passes all checks:

```bash
pnpm lint       # Run ESLint
```

The project uses:

- **ESLint** with flat config for linting
- **Prettier** for code formatting (runs automatically via lint-staged)
- **Husky** for pre-commit hooks

## Testing Your Changes

1. Open the project in VS Code
2. Press `F5` to launch the Extension Development Host
3. Create a test file with the appropriate extension
4. Test your snippets by typing the prefix and pressing `Tab`

## Submitting Changes

1. Create a new branch for your changes
2. Make your changes and commit with a descriptive message
3. Push your branch and open a Pull Request
4. Describe what your changes do and why

## Questions?

If you have questions or run into issues, please [open an issue](https://github.com/mheob/vscode-snippets/issues).
