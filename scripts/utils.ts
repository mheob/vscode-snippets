import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { CODE_SNIPPETS_EXTENSION, OUTPUT_DIRECTORY } from './constants';
import type { Snippet } from './types';

/**
 * Get list if files paths based on directory
 *
 * @param directoryPath Path to directory
 * @returns List of files paths inside directory
 */
export const getAllFilesInDirection = async (directoryPath: string): Promise<string[]> => {
	const files = await readdir(directoryPath);
	return files.map((file: string) => path.join(directoryPath, file));
};

/**
 * Get files content based on paths
 *
 * @param filesPaths List of paths to files
 * @returns List of content of each file
 */
export const getFilesContent = (filesPaths: string[]): Promise<string[]> => {
	return Promise.all(
		filesPaths.map(async filePath => {
			const fileContent = await readFile(filePath);
			return fileContent.toString();
		}),
	);
};

/**
 * Get all snippets in object format collected from files in one folder
 *
 * @param folderPath Folder that contains snippets
 * @returns Object with all snippets
 */
export const getSnippetsFromFolder = async (
	folderPath: string,
): Promise<Record<string, Snippet>> => {
	const filesPaths = await getAllFilesInDirection(folderPath);
	const snippetFiles = filesPaths.filter(filePath => filePath.endsWith(CODE_SNIPPETS_EXTENSION));
	const snippetsContent = await getFilesContent(snippetFiles);

	const snippetsObject = snippetsContent.reduce(
		(accumulator, snippetContent) => ({ ...accumulator, ...JSON.parse(snippetContent) }),
		{},
	);

	return snippetsObject;
};

/**
 * Write a snippet object to a file in the output directory as a JSON file.
 *
 * @param file - The name of the output file (should include .json extension).
 * @param snippetObject - An object containing VS Code snippet definitions, keyed by snippet name.
 * @returns A Promise that resolves when the file has been written.
 */
export const writeSnippetFile = (
	file: string,
	snippetObject: Record<string, Snippet>,
): Promise<void> => {
	return writeFile(`${OUTPUT_DIRECTORY}/${file}`, JSON.stringify({ ...snippetObject }));
};
