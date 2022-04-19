module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'plugin:react/recommended',
        'google',
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'react',
    ],
    'rules': {
        'indent': ['error', 4],
        'max-len': 'off',
        'require-jsdoc': 0,
        'linebreak-style': 0,
        // NextJs specific fix: suppress errors for missing 'import React' in files for nextjs
        'react/react-in-jsx-scope': 'off',
        // NextJs specific fix: allow jsx syntax in js files
        'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx']}],
    },
};
