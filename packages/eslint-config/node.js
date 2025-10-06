import baseConfig from './base.js';

export default [
  ...baseConfig,
  {
    files: ['**/*.{js,ts}'],
    rules: {
      // Node.js specific rules - enforce ESM only
    },
  },
];
