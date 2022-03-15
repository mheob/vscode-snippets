import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { CODE_SNIPPETS_EXTENSION, OUTPUT_DIRECTORY } from './constants';
import type { Snippet } from './types';

/**
 * Get list if files paths based on directory
 *
 * @param directoryPath Path to directory
 * @returns List of files paths inside directory
 */
const getAllFilesInDirection = async (directoryPath: string) => {
  const files = await readdir(directoryPath);
  return files.map((file: string) => join(directoryPath, file));
};

/**
 * Get files content based on paths
 *
 * @param filesPaths List of paths to files
 * @returns List of content of each file
 */
const getFilesContent = async (filesPaths: string[]) => {
  return Promise.all(
    filesPaths.map(async (filePath) => {
      const fileContent = await readFile(filePath);
      return fileContent.toString();
    })
  );
};

/**
 * Get all snippets in object format collected from files in one folder
 *
 * @param folderPath Folder that contains snippets
 * @returns Object with all snippets
 */
export const getSnippetsFromFolder = async (folderPath: string) => {
  const filesPaths = await getAllFilesInDirection(folderPath);
  const snippetFiles = filesPaths.filter((filePath) => filePath.endsWith(CODE_SNIPPETS_EXTENSION));
  const snippetsContent = await getFilesContent(snippetFiles);

  const snippetsObject: Record<string, Snippet> = snippetsContent.reduce(
    (accumulator, snippetContent) => ({ ...accumulator, ...JSON.parse(snippetContent) }),
    {}
  );

  return snippetsObject;
};

/**
 * Write the snippets to the output file
 *
 * @param file Filename with extension
 * @param snippetObject Object with all snippets
 */
export const writeSnippetFile = (file: string, snippetObject: Record<string, Snippet>) => {
  return writeFile(`${OUTPUT_DIRECTORY}/${file}`, JSON.stringify({ ...snippetObject }));
};
