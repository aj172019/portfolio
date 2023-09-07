/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            wordBreak: {
                'keep-all': 'keep-all'
            },
            textShadow: {
                'default': '2px 2px 4px rgba(0, 0, 0, 0.1)',
                'lg': '4px 4px 6px rgba(0, 0, 0, 0.1)',
                // ... 기타 원하는 그림자 스타일 추가
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '0.2' },
                    '50%': { opacity: '1' },
                },
            },
            animation: {
                blink: 'blink 1.5s infinite',
            },
            backgroundColor: {
                'dark-navy': '#1D1F3F',
                'light-gray': '#B0B0B0',
                'platinum': '#E5E5E5',
            },
            borderColor: {
                'navy': '#0F1C2E',
                'platinum': '#E5E5E5',
                'highlight': '#FFA500',
                'custom-gray': '#A9A9A9',
                'coral': '#FF6B6B',
                'turquoise': '#40E0D0'
            },
            textColor: {
                'navy': '#0F1C2E',
                'platinum': '#E5E5E5',
                'highlight': '#FFA500',
                'custom-gray': '#A9A9A9',
                'coral': '#FF6B6B',
                'turquoise': '#40E0D0'
            },
            backgroundImage: {
                'pattern': 'url("/oriental-tiles.png")',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.word-wrap': {
                    'overflow-wrap': 'break-word',
                    'word-wrap': 'break-word'
                }
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        }
    ],
    safelist: [
        'text-3xl',
        'text-5xl',
        'sm:w-1/2',
        'md:w-1/3',
        'lg:w-1/5',
    ]
}
