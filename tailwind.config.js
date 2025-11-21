/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4f46e5', // Indigo 600
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
