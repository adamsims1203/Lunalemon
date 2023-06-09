module.exports = {
  env: {
    browser: true,
  },
  extends: ["./node_modules/fx-style/"],
  ignorePatterns: ["public/**/*", "amplify/**/*", "content/examples/**/*"],
  plugins: ["sort-keys-fix"],
  rules: {
    "sort-keys-fix/sort-keys-fix": 0,
    "import/no-anonymous-default-export": 0,
    "react/no-unescaped-entities": 0,
    "react/jsx-sort-props": 0,
    "node/no-unpublished-require": 0,
  },
  overrides: [
    {
      files: ["content/examples/*.tsx"],
      rules: {
        isolatedModules: 0,
      },
    },
  ],
};
