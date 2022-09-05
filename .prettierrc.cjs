/** @type {import('prettier').Config} */
module.exports = {
  ...require('@mheob/prettier-config'),
  overrides: [
    {
      files: ['*.md'],
      options: {
        parser: 'markdown',
        printWidth: 999,
      },
    },
  ],
};
