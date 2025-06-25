import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "plugin:jsx-a11y/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended"
    ],
    plugins: [
      "@typescript-eslint",
      "import",
      "jsx-a11y",
      "react",
      "react-hooks"
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index"
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc" }
        }
      ],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off"
    },
    settings: {
      "import/resolver": {
        typescript: true,
        node: true
      }
    }
  })
];

export default eslintConfig;
