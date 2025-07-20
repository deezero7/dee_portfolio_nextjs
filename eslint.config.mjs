import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable the rule that requires comments for @ts-expect-error
      "@typescript-eslint/ban-ts-comment": "off",

      // Disable the rule for unused variables
      "@typescript-eslint/no-unused-vars": "off",

      // Disable the rule for explicit any types
      "@typescript-eslint/no-explicit-any": "off",

      // Disable the warning about using <img> instead of <Image />
      // This rule comes from @next/eslint-plugin-next, which is part of "next/core-web-vitals"
      "@next/next/no-img-element": "off",

      // Disable the React Hooks exhaustive-deps warning
      // This rule comes from eslint-plugin-react-hooks, often included in React configs
      "react-hooks/exhaustive-deps": "off",

      // If you have other specific rules you want to disable, add them here
      // For example, if you had a 'no-console' rule and wanted to turn it off:
      // "no-console": "off"
    },
  },
];

export default eslintConfig;
