/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#faf9f5',
        'on-background': '#1b1c1a',
        surface: '#faf9f5',
        'surface-dim': '#dbdad6',
        'surface-bright': '#faf9f5',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f4f4f0',
        'surface-container': '#efeeea',
        'surface-container-high': '#e9e8e4',
        'surface-container-highest': '#e3e2df',
        'on-surface': '#1b1c1a',
        'on-surface-variant': '#5a413d',
        primary: '#570000',
        'on-primary': '#ffffff',
        'primary-container': '#800000',
        'on-primary-container': '#ff8371',
        secondary: '#5f5e5e',
        'on-secondary': '#ffffff',
        'secondary-container': '#e2dfde',
        'on-secondary-container': '#636262',
        outline: '#8e706c',
        'outline-variant': '#e2bfb9',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
        paper: '#f2f0e9',
        'ai-accent': '#e0e7ff',
      },
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        newsreader: ['Newsreader', 'serif'],
      },
      borderRadius: {
        DEFAULT: '20px',
      },
      boxShadow: {
        'soft': '0px 10px 30px rgba(28, 28, 28, 0.05)',
      }
    },
  },
  plugins: [],
}
