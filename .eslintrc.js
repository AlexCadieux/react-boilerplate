const eslintRules = {
  "constructor-super": "error",
  "for-direction": "error",
  "no-async-promise-executor": "error",
  "no-case-declarations": "error",
  "no-class-assign": "error",
  "no-compare-neg-zero": "error",
  "no-cond-assign": "error",
  "no-const-assign": "error",
  "no-constant-condition": "error",
  "no-control-regex": "error",
  "no-debugger": "error",
  "no-delete-var": "error",
  "no-dupe-args": "error",
  "no-dupe-class-members": "error",
  "no-dupe-keys": "error",
  "no-duplicate-case": "error",
  "no-empty": "error",
  "no-empty-character-class": "error",
  "no-empty-pattern": "error",
  "no-ex-assign": "error",
  "no-extra-semi": "error",
  "no-fallthrough": "error",
  "no-func-assign": "error",
  "no-global-assign": "error",
  "no-inner-declarations": "error",
  "no-invalid-regexp": "error",
  "no-misleading-character-class": "error",
  "no-mixed-spaces-and-tabs": "error",
  "no-new-symbol": "error",
  "no-obj-calls": "error",
  "no-octal": "error",
  "no-prototype-builtins": "warn",
  "no-redeclare": "error",
  "no-regex-spaces": "error",
  "no-restricted-imports": [
    "error",
    { "name": "lodash", "message": "Use chunk friendly imports for lodash like 'lodash/<fn>'" }
  ],
  "no-self-assign": "error",
  "no-shadow-restricted-names": "error",
  "no-sparse-arrays": "error",
  "no-this-before-super": "error",
  "no-unexpected-multiline": "error",
  "no-unreachable": "error",
  "no-unsafe-finally": "error",
  "no-unsafe-negation": "error",
  "no-unused-labels": "error",
  "no-useless-catch": "error",
  "no-useless-escape": "error",
  "no-with": "error",
  "require-yield": "error",
  "semi": ["error", "always"],
  "valid-typeof": "off",
  "object-curly-spacing": [
    "error", "always"
  ],
  "no-multi-spaces": "error",
  "template-curly-spacing": [
    "error", "never"
  ],
  "indent": [ "error", 2 ],
  "arrow-parens": [
    "error",
    "always"
  ],
  "camelcase": "off",
  "comma-dangle": "off",
  "complexity": "off",
  "curly": "error",
  "dot-notation": "error",
  "eol-last": "error",
  "eqeqeq": [
    "error",
    "smart"
  ],
  "id-blacklist": "off",
  "id-match": "error",
  "import/no-default-export": "error",
  "import/order": "off",
  "max-classes-per-file": "off",
  "max-len": [
    "error",
    {
      "code": 100
    }
  ],
  "new-parens": "error",
  "no-bitwise": "error",
  "no-caller": "error",
  "no-console": "error",
  "no-eval": "error",
  "no-invalid-this": "off",
  "no-multiple-empty-lines": "error",
  "no-new-wrappers": "error",
  "no-shadow": [
    "error",
    {
      "hoist": "all"
    }
  ],
  "no-trailing-spaces": "error",
  "no-undef-init": "error",
  "no-unused-expressions": [
    "error",
    {
      "allowShortCircuit": true
    }
  ],
  "no-var": "error",
  "object-shorthand": "error",
  "one-var": [
    "error",
    "never"
  ],
  "prefer-const": "off",
  "prefer-object-spread": "error",
  "quote-props": [
    "error",
    "consistent-as-needed"
  ],
  "radix": "error",
  "space-before-function-paren": [
    "error",
    {
      "anonymous": "never",
      "asyncArrow": "always",
      "named": "never"
    }
  ],
  "spaced-comment": [
    "off",
    "never"
  ],
  "space-in-parens": ["error", "never"],
  "comma-dangle": ["error", "only-multiline"],
  "prefer-rest-params": "off"
};

const reactRules = {
  'react/no-children-prop': 'warn',
  'react/display-name': 'off',
  'react/prop-types': 'off',
  'react/no-find-dom-node': 'warn',
  'react/jsx-wrap-multilines': ["error",{
    "declaration": "parens-new-line",
    "assignment": "parens-new-line",
    "return": "parens-new-line",
    "arrow": "parens-new-line",
    "condition": "ignore",
    "logical": "ignore",
    "prop": "ignore"
  }],
  "react/jsx-tag-spacing": [
    "error", { beforeSelfClosing: "always" }
  ],
  "react/self-closing-comp": "error",
  "react/no-string-refs": "error",
  "react/jsx-key": "error",
  "react/jsx-equals-spacing": [2, "never"],
  "react/jsx-curly-spacing": [2, { "when": "always" }],
  "react/no-unescaped-entities": "off"
};

const reactHooksRules = {
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "off"
};

const tsRules = {
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/ban-ts-ignore": "warn",
  "@typescript-eslint/camelcase": "off",
  "@typescript-eslint/no-unused-vars": [
    'error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }
  ],
  "@typescript-eslint/no-non-null-assertion": "off",
  "@typescript-eslint/adjacent-overload-signatures": "error",
  "@typescript-eslint/array-type": [
    "error", { default: 'array-simple' }
  ],
  "@typescript-eslint/ban-types": "error",
  "@typescript-eslint/class-name-casing": "error",
  "@typescript-eslint/consistent-type-assertions": [
    'warn', {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'never'
    }
  ],
  "@typescript-eslint/consistent-type-definitions": "error",
  "@typescript-eslint/explicit-member-accessibility": [
    "off",
    {
      "accessibility": "explicit"
    }
  ],
  "@typescript-eslint/indent": [
    "error",
    2,
    {
      "FunctionDeclaration": {
        "parameters": "first"
      },
      "FunctionExpression": {
        "parameters": "first"
      }
    }
  ],
  "@typescript-eslint/interface-name-prefix": "off",
  "@typescript-eslint/member-delimiter-style": [
    "error",
    {
      "multiline": {
        "delimiter": "semi",
        "requireLast": true
      },
      "singleline": {
        "delimiter": "semi",
        "requireLast": false
      }
    }
  ],
  "@typescript-eslint/member-ordering": "error",
  "@typescript-eslint/no-empty-function": "error",
  "@typescript-eslint/no-empty-interface": "error",
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-for-in-array": "error",
  "@typescript-eslint/no-misused-new": "error",
  "@typescript-eslint/no-namespace": "error",
  "@typescript-eslint/no-parameter-properties": "off",
  "@typescript-eslint/no-use-before-define": "off",
  "@typescript-eslint/no-var-requires": "off",
  "@typescript-eslint/prefer-for-of": "off",
  "@typescript-eslint/prefer-function-type": "error",
  "@typescript-eslint/prefer-namespace-keyword": "error",
  "@typescript-eslint/quotes": [
    "error",
    "single",
    {
      "avoidEscape": true
    }
  ],
  "@typescript-eslint/semi": [
    "error",
    "always"
  ],
  "@typescript-eslint/triple-slash-reference": "error",
  "@typescript-eslint/type-annotation-spacing": "off",
  "@typescript-eslint/unified-signatures": "error",
	"@typescript-eslint/prefer-optional-chain": "off",
	"@typescript-eslint/no-unnecessary-type-assertion": "warn",
	"@typescript-eslint/prefer-nullish-coalescing": "off",
	"@typescript-eslint/promise-function-async": "error"
};

const rules = {
  ...eslintRules,
  ...reactRules,
  ...reactHooksRules,
  ...tsRules
};

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: "tsconfig.json"
  },
  plugins: [
    "import",
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  settings: {
		react: {
			version: "detect"
		},
  },
  rules
}
