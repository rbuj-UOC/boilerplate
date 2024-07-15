import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import html from "eslint-plugin-html";
import markdown from "eslint-plugin-markdown";

export default [
  {files: ["**/*.html"], plugins: { html } },
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  ...markdown.configs.recommended,
];
