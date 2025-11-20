/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6366f1', // Indigo 500
                secondary: '#64748b', // Slate 500
                accent: '#06b6d4', // Cyan 500
                dark: '#0f172a', // Slate 900
            },
            fontFamily: {
                sans: [
                    'Outfit',
                    'Outfit Fallback',
                    'Plus Jakarta Sans',
                    'Plus Jakarta Sans Fallback',
                    'system-ui',
                    '-apple-system',
                    'sans-serif'
                ],
            },
        },
    },
    plugins: [],
}
