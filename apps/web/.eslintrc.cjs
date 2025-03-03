module.exports = {
  root: true,
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  extends: [ "@repo/eslint-config/web"],
  ignorePatterns: ["dist"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
