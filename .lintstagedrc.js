module.exports = {
  // Lint & Prettify TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    // `pnpm run lint --fix . ${filenames.join(' --file')}`,
    `pnpm run lint --fix .`,
    `prettier --write ${filenames.join(' ')}`,
    `pnpm test.unit`,
  ],
};
