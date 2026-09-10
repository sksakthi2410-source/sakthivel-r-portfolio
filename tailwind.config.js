/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141322',
        paper: '#FBF9F6',
        panel: '#1B1A2E',
        panel2: '#232140',
        violet: '#6C4CF1',
        violetSoft: '#EFEAFF',
        amber: '#F5A623',
        teal: '#20B2A6',
        muted: '#5B5871',
        mutedLt: '#B4B1CC',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        wrap: '1120px',
      },
      borderRadius: {
        card: '14px',
      },
    },
  },
  plugins: [],
}
