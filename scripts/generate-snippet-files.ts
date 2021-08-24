import { mkdir, rm, writeFile } from 'node:fs/promises';

import {
  JS_FILE_NAME,
  JS_REACT_FILE_NAME,
  JS_REACT_SNIPPETS_DIRECTORY,
  JS_SNIPPETS_DIRECTORY,
  MD_FILE_NAME,
  MD_SNIPPETS_DIRECTORY,
  OUTPUT_DIRECTORY,
  TS_FILE_NAME,
  TS_REACT_FILE_NAME,
  TS_REACT_SNIPPETS_DIRECTORY,
  TS_SNIPPETS_DIRECTORY,
} from './constants';
import { Snippet } from './types';
import { getSnippetsFromFolder } from './utils';

const writeSnippetFile = async (file: string, snippetObject: Record<string, Snippet>) => {
  writeFile(`${OUTPUT_DIRECTORY}/${file}`, JSON.stringify({ ...snippetObject }));
};

const generateSnippetFiles = async () => {
  await rm(OUTPUT_DIRECTORY, { recursive: true, force: true });
  await mkdir(OUTPUT_DIRECTORY);

  const mdSnippetsObject = await getSnippetsFromFolder(MD_SNIPPETS_DIRECTORY);
  const jsSnippetsObject = await getSnippetsFromFolder(JS_SNIPPETS_DIRECTORY);
  const jsReactSnippetsObject = await getSnippetsFromFolder(JS_REACT_SNIPPETS_DIRECTORY);
  const tsSnippetsObject = await getSnippetsFromFolder(TS_SNIPPETS_DIRECTORY);
  const tsReactSnippetsObject = await getSnippetsFromFolder(TS_REACT_SNIPPETS_DIRECTORY);

  writeSnippetFile(MD_FILE_NAME, mdSnippetsObject);
  writeSnippetFile(JS_FILE_NAME, jsSnippetsObject);
  writeSnippetFile(JS_REACT_FILE_NAME, { ...jsSnippetsObject, ...jsReactSnippetsObject });
  writeSnippetFile(TS_FILE_NAME, { ...jsSnippetsObject, ...tsSnippetsObject });
  writeSnippetFile(TS_REACT_FILE_NAME, {
    ...jsSnippetsObject,
    ...jsReactSnippetsObject,
    ...tsSnippetsObject,
    ...tsReactSnippetsObject,
  });
};

generateSnippetFiles();
