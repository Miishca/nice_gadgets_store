module.exports = {
  root: true,
  extends: ['@mate-academy/eslint-config-react-typescript'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'max-len': ['error', {
      ignoreTemplateLiterals: true,
      ignoreComments: true,
    }],
    'jsx-a11y/label-has-associated-control': ["error", {
      assert: "either",
    }],
  },
};
