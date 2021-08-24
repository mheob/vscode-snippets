import { resolve } from 'node:path';

export const CODE_SNIPPETS_EXTENSION = '.code-snippets';

export const ROOT_DIRECTORY = resolve(__dirname, '../');
export const MD_SNIPPETS_DIRECTORY = resolve(ROOT_DIRECTORY, 'src/markdown');
export const JS_SNIPPETS_DIRECTORY = resolve(ROOT_DIRECTORY, 'src/javascript');
export const JS_REACT_SNIPPETS_DIRECTORY = resolve(ROOT_DIRECTORY, 'src/javascriptreact');
export const TS_SNIPPETS_DIRECTORY = resolve(ROOT_DIRECTORY, 'src/typescript');
export const TS_REACT_SNIPPETS_DIRECTORY = resolve(ROOT_DIRECTORY, 'src/typescriptreact');
export const OUTPUT_DIRECTORY = resolve(ROOT_DIRECTORY, 'snippets');

export const MD_FILE_NAME = 'markdown.json';
export const JS_FILE_NAME = 'javascript.json';
export const JS_REACT_FILE_NAME = 'javascriptreact.json';
export const TS_FILE_NAME = 'typescript.json';
export const TS_REACT_FILE_NAME = 'typescriptreact.json';
