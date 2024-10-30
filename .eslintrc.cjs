module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/react',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
        'jsx-a11y',
        'import',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',  // React 17+ doesn't require React to be in scope
        'import/no-unresolved': 'error',
        'import/order': ['error', { alphabetize: { order: 'asc' } }],
        'jsx-a11y/anchor-is-valid': 'off',  // Customize according to your needs
        "react/prop-types": "off",
    },
    settings: {
        react: {
            version: 'detect',  // Automatically detect the react version
        },
    },
};
