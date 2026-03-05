import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import configPrettier from "eslint-config-prettier";
import storybook from "eslint-plugin-storybook";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [".next/*", "node_modules/*", "dist/*", "storybook-static/*", "out/*", "coverage/*"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...nextVitals,

  ...storybook.configs["flat/recommended"],

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },

  configPrettier,
];

export default eslintConfig;
