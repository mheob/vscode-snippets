# Snippets for Next.js, React in TypeScript

[![GitHub issues](https://img.shields.io/github/issues/mheob/vscode-snippets?logo=github&style=for-the-badge)](https://github.com/mheob/vscode-snippets)

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

| Trigger | Content                | Only for languages |
| :------ | :--------------------- | :----------------- |
| `dtid⇥` | adds `data-testid="…"` | `.jsx`, `.tsx`     |

### Console

| Trigger      | Content                          |
| :----------- | :------------------------------- |
| `consError⇥` | console error `console.error(…)` |
| `consInfo⇥`  | console info `console.info(…)`   |
| `consLog⇥`   | console log `console.log(…)`     |
| `consWarn⇥`  | console warn `console.warn(…)`   |

### Export and Import

| Trigger            | Content                                                         | Only for languages |
| :----------------- | :-------------------------------------------------------------- | :----------------- |
| `expAllFrom⇥`      | exports all from module `export * from '…'`                     |                    |
| `expAs⇥`           | exports all as alias from module `export … as … from '…'`       |                    |
| `expConst⇥`        | exports const `export const … = …`                              |                    |
| `exportDefault⇥`   | exports default `export default …`                              |                    |
| `impFrom⇥`         | imports entire module `import … from '…'`                       |                    |
| `impAllFrom⇥`      | imports all as alias from module `import … as … from '…'`       |                    |
| `impDestructured⇥` | imports only destructed part of module `import { … } from '…'`  |                    |
| `impFileOnly⇥`     | imports entire module without module name `import '…'`          |                    |
| `impReact⇥`        | import the `React` module `import React from 'react'`           | `.jsx`, `.tsx`     |
| `impReactDom⇥`     | import the `ReactDOM` module `import ReactDOM from 'react-dom'` | `.jsx`, `.tsx`     |
| `impType⇥`         | import only the type from module `import type { … } from '…'`   | `.ts`, `.tsx`      |

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

| Trigger        | Hook                      |
| :------------- | :------------------------ |
| `useCallback⇥` | create `useCallback` hook |
| `useContext⇥`  | create `useContext` hook  |
| `useEffect⇥`   | create `useEffect` hook   |
| `useMemo⇥`     | create `useMemo` hook     |
| `useReducer⇥`  | create `useReducer` hook  |
| `useRef⇥`      | create `useRef` hook      |
| `useRouter⇥`   | create `useRouter` hook   |
| `useState⇥`    | create `useState` hook    |

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
