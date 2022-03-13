# Snippets for Next.js, React in TypeScript

[![Version](https://vsmarketplacebadge.apphb.com/version-short/mheob.vscode-snippets.svg?style=for-the-badge&logo=visual-studio-code&logoColor=007ACC)](https://marketplace.visualstudio.com/items?itemName=mheob.vscode-snippets) [![GitHub issues](https://img.shields.io/github/issues/mheob/vscode-snippets?logo=github&style=for-the-badge)](https://github.com/mheob/vscode-snippets) [![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=for-the-badge)](https://gitmoji.dev)

This extension provides you Snippets for the development with Next.js, React in a TypeScript environment in [VS Code](https://code.visualstudio.com/).

## Supported languages (file extensions)

- JavaScript (`.js`)
- JavaScript React (`.jsx`)
- TypeScript (`.ts`)
- TypeScript React (`.tsx`)

- Markdown (`.md`)

## Snippets List for JS/TS

### Components

#### `rfc⇥`

Creates a React Functional Component

Only for languages: `.tsx`

```tsx
type MyDynamicComponentNameProps = { … }

export const MyDynamicComponentName = ({ … }: MyDynamicComponentNameProps): JSX.Element => {
  return (
    <div>$0</div>
  )
}

export default MyDynamicComponentName
```

### Common

| Trigger  | Content                                   | Only for languages |
| :------- | :---------------------------------------- | :----------------- |
| `dtid⇥`  | adds `data-testid="…"`                    | `.jsx`, `.tsx`     |
| `forIn⇥` | for ... in loop `for(const … in …) { … }` |                    |
| `forOf⇥` | for ... of loop `for(const … of …) { … }` |                    |

### Console

| Trigger         | Content                          |
| :-------------- | :------------------------------- |
| `consoleError⇥` | console error `console.error(…)` |
| `consoleInfo⇥`  | console info `console.info(…)`   |
| `consoleLog⇥`   | console log `console.log(…)`     |
| `consoleWarn⇥`  | console warn `console.warn(…)`   |

### Export and Import

| Trigger               | Content                                                         | Only for languages |
| :-------------------- | :-------------------------------------------------------------- | :----------------- |
| `exportAllFrom⇥`      | exports all from module `export * from '…'`                     |                    |
| `exportAs⇥`           | exports all as alias from module `export … as … from '…'`       |                    |
| `exportConst⇥`        | exports const `export const … = …`                              |                    |
| `exportDefault⇥`      | exports default `export default …`                              |                    |
| `importFrom⇥`         | imports entire module `import … from '…'`                       |                    |
| `importAllFrom⇥`      | imports all as alias from module `import … as … from '…'`       |                    |
| `importDestructured⇥` | imports only destructed part of module `import { … } from '…'`  |                    |
| `importFileOnly⇥`     | imports entire module without module name `import '…'`          |                    |
| `importReact⇥`        | import the `React` module `import React from 'react'`           | `.jsx`, `.tsx`     |
| `importReactDom⇥`     | import the `ReactDOM` module `import ReactDOM from 'react-dom'` | `.jsx`, `.tsx`     |
| `importType⇥`         | import only the type from module `import type { … } from '…'`   | `.ts`, `.tsx`      |

### Functions

| Trigger                | Content                                                  |
| :--------------------- | :------------------------------------------------------- |
| `arrowFunction⇥`       | creates a named function `const … = (…) => …`            |
| `arrowFunctionInline⇥` | creates an anonymous function `(…) => …`                 |
| `setInterval⇥`         | set interval helper method `setInterval(() => { … }, …)` |
| `setTimeout⇥`          | set timeout helper method `setTimeout(() => { … }, …)`   |

### Next.js Functions

| Trigger               | Content                                                    | Only for languages |
| :-------------------- | :--------------------------------------------------------- | :----------------- |
| `getServerSideProps⇥` | creates the Next.js specific `getServerSideProps` function | `.tsx`             |
| `getStaticPaths⇥`     | creates the Next.js specific `getStaticPaths` function     | `.tsx`             |
| `getStaticProps⇥`     | creates the Next.js specific `getStaticProps` function     | `.tsx`             |

### React Hooks

| Trigger           | Hook                                                                               |
| :---------------- | :--------------------------------------------------------------------------------- |
| `useCallback⇥`    | create `useCallback` hook                                                          |
| `useContext⇥`     | create `useContext` hook                                                           |
| `useEffect⇥`      | create `useEffect` hook                                                            |
| `useMemo⇥`        | create `useMemo` hook                                                              |
| `useReducer⇥`     | create `useReducer` hook                                                           |
| `useRef⇥`         | create `useRef` hook                                                               |
| `useRouter⇥`      | create `useRouter` hook                                                            |
| `useState⇥`       | create `useState` hook                                                             |
| `useTranslation⇥` | create `useTranslation` hook (part of [react.i18next](https://react.i18next.com/)) |

## Snippets List for Markdown

| Trigger                   | Content                                      |
| :------------------------ | :------------------------------------------- |
| `mdCode⇥`                 | insert a code block                          |
| `mdImage⇥`                | insert a image                               |
| `mdImageWithTitle⇥`       | insert a image with a title attribute        |
| `mdLink⇥`                 | insert a link                                |
| `mdLinkWithTitle⇥`        | insert a link with a title attribute         |
| `mdLinkedImage⇥`          | insert a linked image                        |
| `mdLinkedImageWithTitle⇥` | insert a linked image with a title attribute |
| `mdTodo⇥`                 | insert a ToDo list item                      |
