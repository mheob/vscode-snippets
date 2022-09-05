import { mkdir, rm } from 'node:fs/promises';

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
import { getSnippetsFromFolder, writeSnippetFile } from './utils';

/** Generate snippets files. */
const generateSnippetFiles = async (): Promise<void> => {
  await rm(OUTPUT_DIRECTORY, { recursive: true, force: true });
  await mkdir(OUTPUT_DIRECTORY);

  const mdSnippetsObject = await getSnippetsFromFolder(MD_SNIPPETS_DIRECTORY);
  writeSnippetFile(MD_FILE_NAME, mdSnippetsObject);

  const jsSnippetsObject = await getSnippetsFromFolder(JS_SNIPPETS_DIRECTORY);
  writeSnippetFile(JS_FILE_NAME, jsSnippetsObject);

  const jsReactSnippetsObject = await getSnippetsFromFolder(JS_REACT_SNIPPETS_DIRECTORY);
  writeSnippetFile(JS_REACT_FILE_NAME, { ...jsSnippetsObject, ...jsReactSnippetsObject });

  const tsSnippetsObject = await getSnippetsFromFolder(TS_SNIPPETS_DIRECTORY);
  writeSnippetFile(TS_FILE_NAME, { ...jsSnippetsObject, ...tsSnippetsObject });

  const tsReactSnippetsObject = await getSnippetsFromFolder(TS_REACT_SNIPPETS_DIRECTORY);
  writeSnippetFile(TS_REACT_FILE_NAME, {
    ...jsSnippetsObject,
    ...jsReactSnippetsObject,
    ...tsSnippetsObject,
    ...tsReactSnippetsObject,
  });
};

generateSnippetFiles();
