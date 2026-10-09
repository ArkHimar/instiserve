export default [
  { ignores: ["node_modules", "dist", "build", ".storybook", "*.config.*"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    }
  }
];