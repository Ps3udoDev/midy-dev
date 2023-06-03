/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-acent-color': '#4c6aff',
        'bg-color': '#ffffff',
        'main-text-color': '#333333',
        'secondary-text-color': '#666666',
        'secondary-color-1': '#a742ff',
        'secondary-color-2': '#0087ff',
        'secondary-color-3': '#e680ff',
        'dark-acent-color': '#7289da',
        'dark-bg-color': '#1f2937',
        'dark-main-text-color': '#ffffff',
        'dark-secondary-text-color': '#cccccc',
      }
    },
  },
  plugins: [],
}
