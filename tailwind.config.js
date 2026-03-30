/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",      // 파란색 - 주요 색상
        secondary: "#7c3aed",    // 보라색 - 강조 색상
        accent: "#ec4899",       // 핑크색 - 악센트
        dark: "#0f172a",         // 어두운 배경
        lightDark: "#1e293b",    // 더 밝은 어두운 배경
      },
      fontFamily: {
        sans: [
          'Inter',
          'Roboto',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        typewrite: 'typewrite 3.5s steps(40, end)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typewrite: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
