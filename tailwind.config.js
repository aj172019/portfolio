/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {},
        },
    },
    plugins: [],
    safelist: [
        'text-3xl',
        'text-5xl',
        'w-1/2',
        'w-1/3',
        'w-1/5',
    ]
}
