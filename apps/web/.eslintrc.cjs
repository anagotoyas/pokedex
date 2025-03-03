module.exports = {
  root: true,
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  extends: [ "@repo/eslint-config/web"],
  ignorePatterns: ["dist"],
  rules: {
    "security/detect-object-injection": "off",
  },
};
