# Snippets for Next.js, React in TypeScript

This extension provides you Snippets for the development with Next.js, React in a TypeScript
environment in [VS Code](https://code.visualstudio.com/).

## Supported languages (file extensions)

- JavaScript (`.js`)
- JavaScript React (`.jsx`)
- TypeScript (`.ts`)
- TypeScript React (`.tsx`)

## Snippets List

### Common

| Trigger  | Content                                   | Languages                    |
| :------- | :---------------------------------------- | :--------------------------- |
| `dtid⇥`  | adds `data-testid="…"`                    | `.jsx`, `.tsx`               |
| `forIn⇥` | for ... in loop `for(const … in …) { … }` | `.js`, `.jsx`, `.ts`, `.tsx` |
| `forOf⇥` | for ... of loop `for(const … of …) { … }` | `.js`, `.jsx`, `.ts`, `.tsx` |

### Console

| Trigger         | Content                          | Languages                    |
| :-------------- | :------------------------------- | :--------------------------- |
| `consoleError⇥` | console error `console.error(…)` | `.js`, `.jsx`, `.ts`, `.tsx` |
| `consoleInfo⇥`  | console info `console.info(…)`   | `.js`, `.jsx`, `.ts`, `.tsx` |
| `consoleLog⇥`   | console log `console.log(…)`     | `.js`, `.jsx`, `.ts`, `.tsx` |
| `consoleWarn⇥`  | console warn `console.warn(…)`   | `.js`, `.jsx`, `.ts`, `.tsx` |

### Export and Import

| Trigger               | Content                                                                    | Languages                    |
| :-------------------- | :------------------------------------------------------------------------- | :--------------------------- |
| `exportAllFrom⇥`      | exports all from module `export * from '…'`                                | `.js`, `.jsx`, `.ts`, `.tsx` |
| `exportAs⇥`           | exports all as alias from module `export … as … from '…'`                  | `.js`, `.jsx`, `.ts`, `.tsx` |
| `exportConst⇥`        | exports const `export const … = …`                                         | `.js`, `.jsx`, `.ts`, `.tsx` |
| `exportDefault⇥`      | exports default `export default …`                                         | `.js`, `.jsx`, `.ts`, `.tsx` |
| `importFrom⇥`         | imports entire module `import … from '…'`                                  | `.js`, `.jsx`, `.ts`, `.tsx` |
| `importAllFrom⇥`      | imports all as alias from module `import … as … from '…'`                  | `.js`, `.jsx`, `.ts`, `.tsx` |
| `importDestructured⇥` | imports only a portion of module using destructing `import { … } from '…'` | `.js`, `.jsx`, `.ts`, `.tsx` |
| `importFileOnly⇥`     | imports entire module without module name `import '…'`                     | `.js`, `.jsx`, `.ts`, `.tsx` |
| `importReact⇥`        | import the `React` module `import React from 'react'`                      | `.jsx`, `.tsx`               |
| `importReactDom⇥`     | import the `ReactDOM` module `import ReactDOM from 'react-dom'`            | `.jsx`, `.tsx`               |
| `importType⇥`         | import only the type from module `import type { … } from '…'`              | `.ts`, `.tsx`                |

### Functions

| Trigger                | Content                                                  | Languages                    |
| :--------------------- | :------------------------------------------------------- | :--------------------------- |
| `arrowFunction⇥`       | creates a named function `const … = (…) => …`            | `.js`, `.jsx`, `.ts`, `.tsx` |
| `arrowFunctionInline⇥` | creates an anonymous function `(…) => …`                 | `.js`, `.jsx`, `.ts`, `.tsx` |
| `setInterval⇥`         | set interval helper method `setInterval(() => { … }, …)` | `.js`, `.jsx`, `.ts`, `.tsx` |
| `setTimeout⇥`          | set timeout helper method `setTimeout(() => { … }, …)`   | `.js`, `.jsx`, `.ts`, `.tsx` |

### React Hooks

| Trigger           | Hook                                                                               | Languages                    |
| :---------------- | :--------------------------------------------------------------------------------- | :--------------------------- |
| `useCallback⇥`    | create `useCallback` hook                                                          | `.js`, `.jsx`, `.ts`, `.tsx` |
| `useContext⇥`     | create `useContext` hook                                                           | `.js`, `.jsx`, `.ts`, `.tsx` |
| `useEffect⇥`      | create `useEffect` hook                                                            | `.js`, `.jsx`, `.ts`, `.tsx` |
| `useMemo⇥`        | create `useMemo` hook                                                              | `.js`, `.jsx`, `.ts`, `.tsx` |
| `useReducer⇥`     | create `useReducer` hook                                                           | `.js`, `.jsx`, `.ts`, `.tsx` |
| `useRef⇥`         | create `useRef` hook                                                               | `.js`, `.jsx`, `.ts`, `.tsx` |
| `useRouter⇥`      | create `useRouter` hook                                                            | `.js`, `.jsx`, `.ts`, `.tsx` |
| `useState⇥`       | create `useState` hook                                                             | `.js`, `.jsx`, `.ts`, `.tsx` |
| `useTranslation⇥` | create `useTranslation` hook (part of [react.i18next](https://react.i18next.com/)) | `.js`, `.jsx`, `.ts`, `.tsx` |

### React Components

#### `rfc⇥`

Creates a React Functional Component

Languages: `.tsx`

```.tsx
type MyDynamicComponentNameProps = { … }

export const MyDynamicComponentName = ({ … }: MyDynamicComponentNameProps) => {
  return (
    <div>$0</div>
  )
}

export default MyDynamicComponentName
```
