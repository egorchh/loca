module.exports = {
    extends: ['expo', 'eslint:recommended', 'eslint-config-prettier'],
    plugins: ['prettier', 'eslint-plugin-prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                singleQuote: true,
            },
        ],
    },
};
