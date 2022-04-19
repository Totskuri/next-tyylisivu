module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        letterSpacing: {
            normal: '0.02em',
        },
        extend: {
            colors: {
                'magenta': '#cb6ce6',
                'royalblue': '#5271ff',
                'darkpurple': '#724ca1',
            },
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
        },
    },
    plugins: [],
};
